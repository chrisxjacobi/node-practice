// put tests in 'describe' block to make them more readable in console...used spies to test functions

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
