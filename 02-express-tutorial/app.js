console.log('Express Tutorial')

const http = require("http")
const server = http.createServer((req, res)=>{
  console.log("user hit the server")
  const url = req.url;
  if(url === "/"){
    res.writeHead(200, { "content-type": "text/html" })
    res.write("<h1>Home Page</h1>")
    res.end()
  }
  else{
    res.writeHead(404, { "content-type": "text/html" })
    res.write("<h1>Not Found</h1>")
    res.end()
  }
})

server.listen(5000)
