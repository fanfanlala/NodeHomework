/**
 * Created by dllo on 17/8/2.
 */
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');


var server = http.createServer(function (request,response) {
       var urlObj = url.parse(request.url);
       var pathname = urlObj.pathname;
        if(pathname === '/image/img.jpeg'){
            var finalPath = path.join(__dirname,pathname);
               fs.readFile(finalPath,function (err,data) {
                   response.end(data);
               });
        }else{
            response.statusCode = 404;
            response.end('Not,find');
        }
});
server.listen(3000);