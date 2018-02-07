// reviewed setting environment port variable (if on URL), start/engine scripts, mLab to set up MONGODB_URI (aka database url), viewed app live in heroku via postman/heroku app 

const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var {ObjectID} = require('mongodb'); // importing to make sure id is valid

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// for creating a new todo
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

// for fetching/reading todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}); // send as object to later add other properties
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/or reading todo by id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();  // if no todoy, send back 404 with empty body
    }

    res.send({todo}); // send back todo
  }).catch((e) => {
    res.status(400).send()
  });

});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {app};
