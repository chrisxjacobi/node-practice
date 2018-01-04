// created utility functions for fetch note info in addition to saving new note in the .json file, completed removeNote function logic and logging of message whether or not a note is found to be removed...created a 'read note' function to read the note featuring first matching title in the notes array, made utilit function for styling in the terminal

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
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('NOTE CREATED');
    notes.logNote(note);
  } else {
    console.log('Unable to create note :(');
  }

} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('NOTE FOUND');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}



/* // testing lodash .uniq method
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
fs.appendFileSync('greetings.txt', ` Hello ${user.username}! You are ${notes.age}.`); */
