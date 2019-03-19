const fs = require('fs');

const db = 'notes-data.json';

var addNote = (title, body) => {
  var notes = [];

  try {
    // Read existing data
    var notesAsString = fs.readFileSync(db);
    notes = JSON.parse(notesAsString);
  } catch {
  }
  // Add new note to existing data
  var newNote = {
    title: title,
    body: body
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length > 0) {
    console.error(`Note with title ${title} already exists.`);
    return;
  }

  notes.push(newNote);

  // Write (updated) data
  fs.writeFileSync(db, JSON.stringify(notes));
}

var getAll = () => {
  console.log(`Getting all notes.`);
}

var getNote = function(title) {
  console.log(`Getting note: ${title}`);
}

var removeNote = function removeXXX(title) {
  console.log(`Removing note: ${title}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
