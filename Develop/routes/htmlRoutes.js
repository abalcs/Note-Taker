//allows routing of files 
const path = require("path"); 
//to move files wherever we need them to go
const router = require("express").Router();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;