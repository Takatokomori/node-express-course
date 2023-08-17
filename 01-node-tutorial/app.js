console.log('Welcome to Node Tutorial')

const http = require("http")
const {readFile, writeFile} = require("fs")
const util = require("util")
const readFilePromise = util.promisify(readFile)

const start = async () =>{
  try{
    // const first = await getText("./content/first.txt")
    // const second = await getText("./content/second.txt")
    const first = await readFilePromise("./content/first.txt", "utf-8")
    const second = await readFilePromise("./content/second.txt","utf-8")
    console.log(first, second)
  }
  catch(e){
    console.log(e)
  }

}

const getText = (path)=>{
  return new Promise((resolve, reject) =>{
    readFile(path, "utf-8", (err, data) =>{
      if(err){
        reject(err)
      }
      else{
        resolve(data)
      }
    })
  })
}

start()

const server = http.createServer((req, res) =>{
 if(req.url === "/"){
  res.end("HOME PAGE")
 }
 if(req.url === "/about"){
  res.end("About Page")
 }
})

server.listen(5000, ()=>{
 console.log("Server Listening on port 5000")
})
