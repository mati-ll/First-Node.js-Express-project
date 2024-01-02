const noteService = require("../services/noteService");

const noteController = {
  getIdNote: async (req, res, next) => {
    
    try {
      res.json(await noteService.getIdNote(req.query.id));
    } catch (err) {
      res.status(500).json({error: "Error while getting note"});
      next(err);
    }
  },

  deleteNote: async(req, res, next) => {
    try{
      res.json(await noteService.deleteNote(req.query.id));
    }catch(err){
      res.status(500).json({error: "Error while deleting note"});
      next(err);
    }
  },

  updateNote: async(req, res, next) => {
    try{
      res.json(await noteService.updateNote(req.body));
    }catch(err){
      res.status(500).json({error: "Error while updating note"});
      next(err);
    }
  },

  createNote: async(req, res, next) => {
    try {
      res.json(await noteService.createNote(req.body));
    } catch (err) {
      res.status(500).json({error: "Error while creating note"});
      next(err);
    }
  }
};

module.exports = noteController;
