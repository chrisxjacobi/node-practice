// 

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('NOTE CREATED');
    notes.logNote(note);
  } else {
    console.log('Unable to create note :(');
  }

} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  })

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
  var message = noteRemoved
    ? 'Note was removed'
    : 'Note not found';
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
