const express = require("express")
const router = express.Router()
let { products } = require("../data")

// get all products
router.get("/", (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id, name, image} = product;
    return {id, name, image}
  })
  res.json(newProducts)
})

// get one product
router.get("/:productId", (req, res)=>{
  const { productId } = req.params
  const singleProduct = products.find((product)=>product.id === Number( productId))
  if(!singleProduct){
    return res.status(404).end('Product not Found')
  }
  res.json(singleProduct)
})

router.get("*", ( req,res )=>{
  res.status(404).end("No resource")
})

module.exports = router
