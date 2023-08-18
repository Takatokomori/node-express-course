console.log('Express Tutorial')
const express = require("express")
const app = express()
const path = require("path")

// set up static middleware
app.use(express.static("./public"))

// app.get("/", (req, res)=>{
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// })

app.get("*", (req, res)=>{
  res.status(404).send("resource not found")
})

app.listen(5000, ()=>{
  console.log("server is listening on port 5000")
})


// app.get
// app.post
// app.post
// app.put
// app.delete
// app.all
// app.listen
