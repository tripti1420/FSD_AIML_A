const fs = require('fs');
function write(){
    try {
        console.log("Before Writing");
        fs.writeFileSync("data.txt","Data is written by nodejs");
        console.log("Data written successfully");
    } catch (err) {
        console.log("Error in writing data: "+err)
    }
}
function read(){
    try{
        console.log("Before Reading");
        const rd = fs.readFileSync("data.txt",{encoding:'utf-8'});
        console.log(rd);
        console.log(rd.toString());
        console.log("After Reading");
    }catch (err){
        console.log("Error in writing data: "+err)
    }
}
function append(){
    try{
        console.log("Before Append");
        fs.appendFileSync("data.txt","Appended data by fs module");
        console.log("After Append");
    }catch (err){
        console.log("Error in writing data: "+err)
    }
}

function del() {
    try{
        fs.unlinkSync("data.txt");
        console.log("File deleted");
    } catch (err){
        console.lof("Error in writing data: "+err)
    }
}
const obj = {
    writeFile: write,
    readFile: read,
    appendFile: append,
    delFile: del,
};
module.exports = obj;