const path = require('path');
const router = require('express').Router();

// Create our routes

// Route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Create route to send back to home page if they don't go to notes

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;