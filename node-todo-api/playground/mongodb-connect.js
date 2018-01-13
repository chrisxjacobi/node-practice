// deleted document using deleteOne, deleteMany, findOneAndDelete... also used args to findOneAndUpdate a 

/*
var user = {
  name: 'Chris',
  age: 31
}

var {age} = user;
console.log(age);
*/

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo'), err;
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // insert new doc into a users collection with name, age, location

  // db.collection('Users').insertOne({
  //   name: 'Chris',
  //   age: 31,
  //   location: 'Austin, TX'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // })

  db.close();
});
