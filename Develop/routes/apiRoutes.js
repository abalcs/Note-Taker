//allows routing of files
const router = require("express").Router();
//connects a path to the store.js database file
const store = require("../db/store");

//html is requesting the notes
router.get("/notes", (req, res) => {
    store
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//posts the notes to the body of notes.html using json. Throws 500 error if there is a routing issue
router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//need this one explained for what's happening with params, id, and ok: true
router.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then( () => res.json({ ok: true}))
        .catch(err => res.status(500).json(err))
})

module.exports = router;