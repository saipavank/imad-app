var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  });

var counter=0;
app.get('/counter',function(req,res)
{
    counter +=1;
   res.send(counter.tostring()); 
});

app.get('/first-page', function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'first-page.html'));
    
});
app.get('/second-page', function(req,res){
    res.send('second page is opened');
});

app.get('/third-page', function(req,res)
{
    res.send('the third page is here with no obsolute content');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
