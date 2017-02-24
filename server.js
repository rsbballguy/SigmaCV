var express = require('express');
var fs = require("fs");
var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var request = require('request');
var arr = ["", "", ""];

// This responds with "Hello World" on the homepage
app.use(express.static(__dirname + '/bower_components'));
app.get('/', function (req, res) {
   if(req.query.race){
      if(req.query.race == "1"){
         io.emit('count', "1");
         console.log('count')
      }
      else{
         arr = [req.query.race, req.query.age, req.query.gender];
         res.send("HERE");
         io.emit('change', arr);
         console.log("ASD");
      }
   }
   else{
         //
         console.log("inside");
         fs.readFile('index.html',function (err, data){
            if(err){
               console.log(err);
            }
            res.write(data);
            res.end();
            io.emit('change', arr);
            
         });
         // res.sendFile(__dirname + '/index.html');
      
   }
})
app.get('/male.mp3', function(req, res){
   res.sendFile(__dirname+'/male.mp3');
})
app.get('/female.mp3', function(req, res){
   res.sendFile(__dirname+'/female.mp3');
})
app.get('/website', function(req, res){
})
server.listen(8080);
/*var express = require('express');
var fs = require("fs");
var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var request = require('request');
var url = "";

// This responds with "Hello World" on the homepage
app.use(express.static(__dirname + '/bower_components'));
app.get('/', function (req, res) {
   //res.writeHeader(200, {"Content-Type": "text/html"});  
   if(req.query.url){
      url = req.query.url;
      res.send("HERE");
      //io.emit('change', url);
      request.get(url, function(error, response, body){
                 if(response.statusCode === 404){
                     // Video doesn't exist. Do what you need to do here.
                     
                 }
                 else{
                     // Video exists.
                     // Can handle other HTTP response codes here if you like.
                     io.emit('change', url);
                 }
             });
         console.log("ASD");
   }
   else{
      if(url != ""){
         //
         console.log("inside");
         fs.readFile('index.html',function (err, data){
            if(err){
               console.log(err);
            }
            res.write(data);
            res.end();
            request.get(url, function(error, response, body){
                 if(response.statusCode === 404){
                     // Video doesn't exist. Do what you need to do here.
                     
                 }
                 else{
                     // Video exists.
                     // Can handle other HTTP response codes here if you like.
                     io.emit('change', url);
                 }
             });
            
         });
         // res.sendFile(__dirname + '/index.html');
      }
      else{
         res.send("iOS App is not active");
      }
   }
})
app.get('/male.mp3', function(req, res){
   res.sendFile(__dirname+'/male.mp3');
})
app.get('/female.mp3', function(req, res){
   res.sendFile(__dirname+'/female.mp3');
})
app.get('/website', function(req, res){
})
server.listen(8080);*/