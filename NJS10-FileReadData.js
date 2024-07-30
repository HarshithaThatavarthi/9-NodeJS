const myfs=require("fs");
myfs.readFile("info.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});