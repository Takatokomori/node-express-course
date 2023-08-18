console.log('Welcome to Node Tutorial')

var http = require("http")
var fs = require("fs")

http.createServer((req, res)=>{
  const fileStream = fs.createReadStream("./content/result-sync.txt")
  fileStream.on("open", ()=>{
    fileStream.pipe(res)
  })
  fileStream.on("error", (error)=>{
    res.end(error)
  })
})
