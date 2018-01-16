// added a server.test.js file along with mocha, supertest, and expect in package.json, testing lifecycle (beforeEach) to make sure database is empty before every test case, ran two tests

const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});



app.listen(3000, () => {
  console.log('Listening on port 3000');
})

module.exports = {app};
