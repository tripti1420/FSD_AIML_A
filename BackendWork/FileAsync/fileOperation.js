const fs = require('fs');
function dataWriteCB(){
    fs.writeFile("data.pdf","Hello wrriting PDF file data",(err)=>{
        if(err){
            console.log("Error while writing in File"+err);
        }
        console.log("Data written successfully");
        });
        console.log("Resources closed");

}
function dataReadCB(){
    fs.readFile("data.pdf",{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log("Error while reading the file:"+err)
        }
        console.log(data);
        console.log("All data read successfully");
        });
        console.log("Resource closed");

}
const obj = {
    write: dataWriteCB,
    read: dataReadCB,
};
module.exports = obj;