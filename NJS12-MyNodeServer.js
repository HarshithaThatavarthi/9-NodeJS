const myhttp=require("http");
const server=myhttp.createServer((req,res)=>
{
    res.end("Hello form server side:");
})
server.listen(900,"127.0.0.1",()=>{
    console.log("Listening on port 900 ");
})
