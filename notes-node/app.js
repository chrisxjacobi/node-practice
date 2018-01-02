console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');




// testing lodash .uniq method
var filteredArray = _.uniq(['chris', 1, 'chris', 1, 2, 3, 4])
console.log(filteredArray);

/*
//testing lodash isString method
console.log(_.isString(true));
console.log(_.isString('cxj'));



var res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(7, 19));


var user = os.userInfo();

fs.appendFileSync('greetings.txt', ` Hello ${user.username}! You are ${notes.age}.`);
*/
