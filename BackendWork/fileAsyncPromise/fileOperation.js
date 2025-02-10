const fs = require('fs').promises;
const promise=fs.writeFile("data.txt","Hello, Writing data through FS promises module",{encoding:'utf-8'})
console.log(promise);
promise.then(()=>{
    console.log("Data written successfully");
}).catch(err=>{
    console.log("Error is"+err)
}).finally(msg=>{
    console.log("Finally Done")
})
//fs.readFile()
const promise2 = fs.readFile("data.txt");
promise2.then((data)=>{
    console.log("Data read successfully");
    console.log(data.toString());
}).catch(err=>{
    console.log("Error is err"+err)
}).finally(msg=>{
    console.log("Finally Done")
})