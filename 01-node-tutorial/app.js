console.log('Welcome to Node Tutorial')

const http = require("http")

const server = http.createServer((req, res) =>{
 if(req.url === "/"){
  res.end("HOME PAGE")
 }
 if(req.url === "/about"){
  for(let i =0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      console.log(`${i} ${j}`)
    }
  }
  res.end("About Page")
 }
})

server.listen(5000, ()=>{
 console.log("Server Listening on port 5000")
})
