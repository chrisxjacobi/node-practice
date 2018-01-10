// used supertest chaining for continued testing with express apps, set a status on res.status(), passed a function into expect() that is called by supertest

const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo app v1.0'
  })
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Chris',
    age: 31
  }, {
    name: 'Michelle',
    age: 35
  }, {
    name: 'Sunny',
    age: 8
  }]);
});

app.listen(3000, () => {
  console.log('app listens on port 3000');
});

module.exports.app = app;
