const myfs=require("fs");
//Integration with Node with JSON
const bioData={
    name:"Tom",
    skills:"NODEJS",
    age:10
}
console.log(bioData);
const jsonData=JSON.stringify(bioData);
myfs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("Process Completed");
});
myfs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);
})