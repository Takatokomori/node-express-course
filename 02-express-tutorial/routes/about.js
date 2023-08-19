const express = require("express")
const router = express.Router()
const authorize = require("../authorized")

//router.use([ authorize ])

router.get("/",authorize, (req, res)=>{
  const user = req.user.name
  console.log(user)

  res.status(200).send(`Hello ${user}`)
})

module.exports = router
