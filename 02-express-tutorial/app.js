const express = require("express")
const app = express()
let { products, people } = require("./data")
const logger = require("./logger")
const authorize = require("./authorized")
const morgan = require("morgan")


console.log('Express Tutorial')
// where do you want to apply 
// app.use("/api", logger)
// app.use([ logger, authorize ])
app.use([
  morgan("tiny"),
  express.static("./methods-public")
])

// parse 
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// insert method
app.post("/login", (req, res)=>{
  const { name } = req.body
  if(name){
    return res.status(200).send(`Hello ${name}`)
  }
  res.status(401).send("Please Provide Info")
})


// insert method
app.post("/api/postman/people", (req, res)=>{
  const { name } = req.body
  if(name){
    return res.status(200).json({success: true, name: name})
  }
  return res.status(200).json({success: false, msg:"Please Provide Info"})
})

app.get("/api/people", (req, res)=>{
  res.status(200).json({ data:people })
})


// insert method
app.post("/api/people", (req, res)=>{
  const { name } = req.body
  if(name){
    return res.status(201).json({ sucess: true, person: name })
  }
  res.status(401).json({ success: false, msg:"Please Provide Info" })
})

// put method
app.put("/api/people/:id", (req, res)=>{
  const {id} = req.params
  const { name } = req.body
  const person = people.find((person)=> person.id === Number(id))
  
  if(!person){
    return res.status(404).json({status: false, msg: "No person with this id"})
  }
  
  const newName = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })

  res.status(200).json({status: true, data: newName })
})

// delete method
app.delete("/api/people/:id", (req, res)=>{
  const person = people.find((person)=> person.id === Number(req.params.id))

  if(!person){
    return res.status(404).json({status: false, msg:"No person exist"})
  }

  res.status(200).json({status:true, msg:`Delete successfully with id = ${req.params.id}`})

})

app.get("/api/about", (req, res)=>{
  console.log(req.user)
  res.send(`Hello it's About Page`)
})

app.get("/api/products", authorize, (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id, name, image} = product;
    return {id, name, image}
  })
  res.json(newProducts)
})

app.get("/api/v1/query", (req, res)=>{
  console.log(req.query)
  
  const {search, limit} = req.query
  let sortedProducts = [...products]
  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if(sortedProducts.length < 1){
    return res.status(200).send("No product found")
  }
  return res.status(200).json(sortedProducts)
})

app.get("/api/products/:productId", (req, res)=>{
  console.log(req.params)
  const { productId } = req.params
  const singleProduct = products.find((product)=>product.id === Number( productId) )
  if(!singleProduct){
    return res.status(404).end('Product not Found')
  }
  res.json(singleProduct)
})

app.get("*", ( req,res )=>{
  res.status(404).end("No resource")
})

app.listen(5000, (req, res)=>{
  console.log("User hitting the server")
})
