
class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.users.filter((user) => user.id === id)[0];

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};



/*
addUser(id, name, room)
removeUser(id)
getUser(id)
getUserList(room)

class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  getUserDesc () {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

var me = new Person('Chris', 32);
var description = me.getUserDesc();
console.log(description);
*/
