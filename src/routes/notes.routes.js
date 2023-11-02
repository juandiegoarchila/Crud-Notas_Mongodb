const { Router } = require("express");
const router = Router();

const {
  renderNoteform,
  createNewnote,
  renderNotes,
  renderEditForm,
  updateNote,
  deletenote,
} = require("../controllers/note.controller");
const { isAuthenticated } = require("../helpers/auth");


// New note
router.get("/notes/add",isAuthenticated, renderNoteform);

router.post("/notes/new-note",isAuthenticated, createNewnote);

//get all note
router.get("/notes",isAuthenticated, renderNotes);

//Edit Notes
router.get("/notes/edit/:id",isAuthenticated, renderEditForm);

router.put("/notes/edit/:id",isAuthenticated, updateNote);

//DElate Notes

router.delete("/notes/delete/:id",isAuthenticated, deletenote);

module.exports = router;
