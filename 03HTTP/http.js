var http = require('http');
var fs = require('fs');


var server = http.createServer(function (request,response) {
         var finalPath = 'http://img2.imgtn.bdimg.com/it/u=1496259117,918229565&fm=26&gp=0.jpg';
        fs.readFile(finalPath,function (err,data) {
            console.log("222");
            response.end(data);
        });

});
server.listen(3000);