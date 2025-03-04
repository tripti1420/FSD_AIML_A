const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res)=>{
res.setHeader('Content-Type','text/html');
res.write("<h1>.Welcome to Node Server. </h1>");
const obj={
    "name": "xyz",
    "branch": "CSE AIML"
}
res.write("Hello. ");
res.end(JSON.stringify(obj));

})
server.listen(PORT,()=>{
    console.log("Server is running on "+PORT);
})