const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router.get("/getNote", noteController.getIdNote);
router.get("/deleteNote", noteController.deleteNote);
router.post("/updateNote", noteController.updateNote);
router.post("/createNote", noteController.createNote);


module.exports = router;
