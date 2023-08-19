const getAuthorize = (req, res)=>{
  const user = req.user.name
  console.log(user)

  res.status(200).send(`Hello ${user}`)
}

module.exports = {
  getAuthorize
}
