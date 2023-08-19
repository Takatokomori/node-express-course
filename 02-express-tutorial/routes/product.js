const express = require("express")
const router = express.Router()
const {
  getProducts,
  getProduct,
} = require("../controllers/product")

/*
* url: /api/products
*/

// get all products
router.get("/", getProducts)

// get one product
router.get("/:productId", getProduct)

module.exports = router
