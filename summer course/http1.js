var http=require('http')
var fs=require('fs')
var url = require('url')
http.createServer(function(req,res){
 if(req.method=='GET'){
     var myurl=url.parse(req.url);//takes url string parse it and returns the url object
     var pathname=myurl.pathname
     fs.readFile(pathname.substr(1),function(err,data){
         if(err){
             res.writeHead(404,{'content-type':'text/html'})
             res.write("<h1>file not found</h1>")
             res.end()
         }
         else{
            res.writeHead(404,{'content-type':'text/html'})
            res.write(data)
            res.end()
         }
     })
 }
}).listen(8080);
console.log("server is up and running on http://localhost:8080")