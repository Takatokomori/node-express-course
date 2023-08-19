const express = require("express")
const router = express.Router()
const authorize = require("../authorized")
const {getAuthorize} = require("../controllers/about")

/*
* url: /about
*/
router.use([ authorize ])

router.get("/",getAuthorize)

module.exports = router
