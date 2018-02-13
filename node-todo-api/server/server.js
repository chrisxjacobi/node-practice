// 

require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var {ObjectID} = require('mongodb'); // importing to make sure id is valid

var app = express();
const port = process.env.PORT;

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
      return res.status(404).send();  // if no todo, send back 404 with empty body
    }

    res.send({todo}); // send back todo
  }).catch((e) => {
    res.status(400).send()
  });

});

// DELETE route to delete by id
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});

// UPDATE by id
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime(); // returns JS time object
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

// POST /users route for creating a new user, .pick email and password props, then call save

  app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then((user) => {
      res.send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = {app};
