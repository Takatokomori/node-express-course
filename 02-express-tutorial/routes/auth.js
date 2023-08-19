const express = require("express")
const router = express.Router()

// login method
router.post("/", (req, res)=>{
  const { name } = req.body
  if(name){
    return res.status(200).send(`Hello ${name}`)
  }
  res.status(401).send("Please Provide Info")
})

module.exports = router
