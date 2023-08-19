let { products } = require("../data")

const getProducts = (req, res)=>{
  const newProducts = products.map((product)=>{
    const {id, name, image} = product;
    return {id, name, image}
  })
  res.json(newProducts)
}

const getProduct = (req, res)=>{
  const { productId } = req.params
  const singleProduct = products.find((product)=>product.id === Number( productId))
  if(!singleProduct){
    return res.status(404).end('Product not Found')
  }
  res.json(singleProduct)
}

module.exports = {
  getProducts,
  getProduct,
}
