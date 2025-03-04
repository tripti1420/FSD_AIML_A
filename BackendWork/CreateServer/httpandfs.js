const fs = require('fs').promises;
const http=require('http');
const PORT=3000;
const server=http.createServer(async(request,response)=>{
    response.setHeader("Content-Type","text/html");
    if(request.url=='/home' && request.method=="GET"){
        //response.end("Hi I am at /home end point");
        const data=await fs.readFile('home.html',{encoding:'utf-8'});
        const studentData=await fs.readFile('data.json');
        const completeData=studentData+data;
        //response.write(studentdata);
        response.end(completeData);
    }
    //response.end("Welcome to Node Server");
});
server.listen(PORT,()=>{
    console.log("Server is running on: "+PORT);
})