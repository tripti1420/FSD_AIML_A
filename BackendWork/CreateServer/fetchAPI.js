const http=require('http')
const PORT=2000;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html");
    const data=await fetch('https://fakestoreapi.com/products');
    const resdata = await data.json();
    //console.log(resdata[0].title);
    const htmltemplate=`
    <html>
    <head>
        <title>Online Shop</title>
        <style>
            .container{
                border: 1px solid black;
                margin: 10px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div>
        ${
            resdata.map((ele)=>{
                return (`
                    <div class='container'>
                    
                        <img src=${ele.image} height=200 width=200/>
                    
                    <div>
                        <h3>${ele.image}</h3>
                    </div>
                    <div>
                        <h3>${ele.title}</h3>
                        <h4>${ele.description}</h4>
                    </div>
                    </div>    
                    `)

                
            })
        }
    </body>
    </html>
    `
    res.end(htmltemplate);

})
server.listen(PORT,()=>{
    console.log("Server is running on : "+PORT);
})





















//const http=require('http');
//const PORT=3000;
//const server=http.createServer((req,res)=>{
//    const serresponse=fetch("https://dummyjson.com/recipes");
//    console.log(serresponse);
//})
//server.listen(PORT,()=>{
//    console.log("Server running on : "+PORT);
//})