const myfs=require("fs")   //fs-filesystem
const mybuf_data=myfs.readFileSync("myData.txt");
const myorg_data=mybuf_data.toString();
console.log( myorg_data)