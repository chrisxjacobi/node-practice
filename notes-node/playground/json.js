const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// turning an objet into a string and creating a readable file with that string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// turning the string back into the JSON object
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);


/*
var obj = {
  name: 'Chris'
};

// using JSON to make an object a string
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// parsing a string back into JSON
var personString = '{"name": "Chris", "age": 31}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
*/
