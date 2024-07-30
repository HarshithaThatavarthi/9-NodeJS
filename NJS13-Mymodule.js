//require the http module
var http=require("http");
//require the custom module
var dt=require('./myModule');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("The date and time is currently: "+dt.myDateTime());
    res.end();
}).listen(600);//server listens  on port 600