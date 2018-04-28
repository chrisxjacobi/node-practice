const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({id: '5a7d08cfa9d5562f5a366943'}).then((doc) {
  
})

Todo.findByIdAndRemove('5a7d08cfa9d5562f5a366943').then((todo) => {
  console.log(todo);
});
