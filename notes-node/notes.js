// filled out addNotes function to work via command line, ensured duplicates would not be added, saved into new .json file

console.log('Starting notes.js');

const fs = require('fs');

// creating static note variable
var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  // loading file and fetching notes, parsing data into notes variable
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {}

  // checking to see if a note title already exists and not adding it to notes array
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    // updating data with a new note and save notes to screen
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  };

};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note:', title);
};

var removeNote = (title) => {
  console.log('Removing note:', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
