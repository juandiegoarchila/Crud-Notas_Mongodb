const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.renderNoteform = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewnote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  newNote.user = req.user.id;
  await newNote.save();
  req.flash('success_msg', 'Note Added sucessfully');
  res.redirect('/notes');
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'}).lean()
  res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash('error_msg','No autorizado');
    return res.redirect('/notes');
  }
  res.render('notes/edit-note', { note });
};

notesCtrl.updateNote =  async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {title, description});
  req.flash('success_msg', 'Note Updated Secessfully');


  res.redirect('/notes');
};

notesCtrl.deletenote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id,);
  req.flash('success_msg', 'Note Delete Secessfully');


  res.redirect('/notes');
};

module.exports = notesCtrl;
