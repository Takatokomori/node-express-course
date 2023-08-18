const express = require("express")
const app = express()
const { products, people } = require("./data")
const logger = require("./logger")
const authorize = require("./authorized")
const morgan = require("morgan")


console.log('Express Tutorial')
// where do you want to apply 
// app.use("/api", logger)
// app.use([ logger, authorize ])
app.use([ morgan("tiny") ])

app.get("/", (req, res)=>{
  //res.json(people)
  //res.json(products)
  res.send("<h1>Hello</h1><a href='/api/products'>Products</a>")
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
