const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(async(req,res)=>{
res.setHeader("Content-Type","text/html");
res.write("Welcome to Node JS Server. ");
//console.log(Object.keys(res));
console.log(req.method + " " + req.url);
if(req.url=="/data" && req.method=="GET"){
    res.end("<h2>Hello, I am available at this end point !!<h2>");
}

else if(req.url=="/welcome" && req.method=="GET"){
    const data = await fs.readFile('welcome.html',{encoding:'utf-8'});
    res.end(data);
}

else{
    const data = await fs.readFile('error.html',{encoding:'utf-8'});
    res.end(data);
}

//if(req.url=="/msg" && req.method=="POST"){
//   res.end("<h2>Hello, I am at POST endpoint !!<h2>");
//}
//console.log(res.statusCode);
//res.end("Server response has Ended");
});
server.listen(3000,()=>{
    console.log("Server is running on: "+3000);
})