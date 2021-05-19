//allows routing of files 
const path = require("path"); 
//to move files wherever we need them to go
const router = require("express").Router();

//sends notes to the notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

//redirects to the homepage if there is a path issue
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;