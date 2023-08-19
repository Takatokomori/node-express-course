const express = require("express")
const router = express.Router()
const {products} = require("../data")

router.get("/", (req, res)=>{
  console.log(req.query)
  const {search, limit} = req.query
  let sortedProducts = [...products]
  
  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search) })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if(sortedProducts.length < 1){
    return res.status(200).send("No product found")
  }
  
  return res.status(200).json(sortedProducts)
})

module.exports = router
