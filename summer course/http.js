var http=require('http')
http.createServer(function(req,res){
 res.writeHead(200,{'Content-type':'text/plain'});
 res.write("Welcome to my domain")
 res.end("Welcome to web server")
}).listen(8080)
console.log('Server is up and running on http://localhost:8080');
