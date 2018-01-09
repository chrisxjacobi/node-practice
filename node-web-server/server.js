// installed express, created a port, made basic .get/.send requests. also set up a static directory and added a basic html page

const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Chris',
    likes: [
      'wrestling',
      'cheeseburgers'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('ABOUT PAGE');
});

// create route at /bad
// send back json with an error message property
// navigate and make sure json shows up

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  })
});

app.listen(3000, () => {
  console.log('Server is up on Port 3000');
});
