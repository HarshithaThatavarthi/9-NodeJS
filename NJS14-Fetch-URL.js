const myhttps=require("https");
myhttps.get('https://jsonplaceholder.typicode.com/todos/',(resp)=>{
    let data=""
    //A check of data has been received
    resp.on('data',(check)=>{
        data+=check
    });
    //The whole response has been received.print out the result.
    resp.on('end',()=>{
          console.log(JSON.parse(data));
          console.log(data)
    }).on("error",(err)=>{
        console.log("Error: "+err.message);
    })
});