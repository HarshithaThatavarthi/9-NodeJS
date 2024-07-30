const myfs=require("fs");
const data=myfs.readFileSync("mynewData.txt","utf-8");
console.log(data);
myfs.readFile("mynewData.txt","utf-8",(err,data) => {
     //error will be occured when file is not there.
    console.log(data);
})
