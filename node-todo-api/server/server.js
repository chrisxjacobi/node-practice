// fixed server error by adding the .then to save function

const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

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
