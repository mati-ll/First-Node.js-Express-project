const fs = require("fs/promises");
const {readFileSync} = require("fs");
const path = require("path");

const data = path.join(__dirname, '../', 'data/notes.json');
const getNotes = () => {
  const notes = JSON.parse(readFileSync(data, 'utf-8'));
  return [...notes];
}

const noteService = {
  getIdNote: (id) => {
    const foundNote = getNotes().find((note) => note.id == id);

    if(!foundNote){
      return "Sorry, note not found"
    }else{
      return foundNote;
    }
  },

  deleteNote: async (id)=>{
    const deletedNote = getNotes().filter((note) => note.id != id);
    await fs.appendFile(data, JSON.stringify(deletedNote), {flag: 'w'});
  },

  updateNote: async (req) => {
    const oldNotes = getNotes();
    const updatedNotes = oldNotes.map((item) => {
      if (item.id === req.id) {
          return { ...req }
      }
      return item;
  });
    await fs.appendFile(data, JSON.stringify(updatedNotes), {flag: 'w'});
    
  },

  createNote: async (req) => {
    const notes = getNotes();
    notes.push(req)
    await fs.appendFile(data, JSON.stringify(notes), {flag: 'w'});
  }


};

module.exports = noteService;
