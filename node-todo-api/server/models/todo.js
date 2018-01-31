const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('saved todo:', doc);
// }, (e) => {
//   console.log('unable to save todo');
// })

// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// })

// var newUser = new User({
//   email: 'abc123@yahoo.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('user saved', doc);
// }, (e) => {
//   console.log('error:', e);
// })
