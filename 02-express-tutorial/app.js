console.log('Express Tutorial')
const express = require("express")
const app = express()
const { products, people } = require("./data")

app.get("/", (req, res)=>{
  //res.json(people)
  //res.json(products)
  res.send("<h1>Hello</h1><a href='/api/produts'>Products</a>")
})

app.get("/api/products", (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id, name, image} = product;
    return {id, name, image}
  })
  res.json(newProducts)
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
