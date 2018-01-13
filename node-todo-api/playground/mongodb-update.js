const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("5a594ee49f34174fe99b6e58")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name: "Ms michelle"
  }, {
    $set: {
      name: 'The Real Meshell'
    },
    $inc: {
      age: -2
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })





  //db.close();
});
