var express = require('express')
var app = express()
var exphbs = require('express3-handlebars')

// -- TEMPLATES
app.engine('handlebars',
  exphbs({
    defaultLayout: 'index'
  }))

app.set('view engine', 'handlebars')

// == TEST SERVER 
// app.get('/', function(req, res){
//   res.send('Hello, World!');
// })


// -- ROUTES
app.get('/', function (req, res) {

  res.render('body',
    {
      message: "This is dynamic content"
    });

});
app.get('/about', function (req, res) {

  res.render('about',
    {
      info: "This is dynamic information"
    })

});
app.get('/contact', function (req, res) {

  res.render('contact')

});


// STATIC ROUTES
app.use('/public', express.static('public'))


// RUN SERVER
var port = Number(process.env.PORT || 5100)
app.listen(port);


// CONFIRM SERVER RUNNING
console.log('server running on ' + port)





