console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}




// reviewed process object, process.argv, and the third item in array which can be first address of command line args, used yargs npm package to parse arguments


/*
// testing lodash .uniq method
var filteredArray = _.uniq(['chris', 1, 'chris', 1, 2, 3, 4])
console.log(filteredArray);

// testing lodash isString method
console.log(_.isString(true));
console.log(_.isString('cxj'));

// referencing function in notes.js
var res = notes.addNote();
console.log(res);
console.log('Result:', notes.add(7, 19));

// testing node medthod os
var user = os.userInfo();
// testing node method appendFile
fs.appendFileSync('greetings.txt', ` Hello ${user.username}! You are ${notes.age}.`);
*/
