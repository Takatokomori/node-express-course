const express = require("express")
const app = express()
const morgan = require("morgan")

const people = require("./routes/people")
const auth = require("./routes/auth")
const product = require("./routes/product")
const about = require("./routes/about")
const query = require("./routes/query")

// where do you want to apply 
app.use([
  morgan("tiny"),
  express.static("./methods-public"),
  express.urlencoded({extended: false}),
  express.json()
])
// app.use("/api", logger)


// import routes
app.use("/api/people", people)
app.use("/login", auth)
app.use("/api/products", product)
app.use("/about", about)
app.use("/query", query)

// Not Found
app.get("*", (req, res)=>{
  res.status(404).send("Page Not Found")
})

app.listen(5000, (req, res)=>{
  console.log("User hitting the server")
})
