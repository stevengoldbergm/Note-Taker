const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const { nextTick } = require('process');

// Promisify the fs.readfile method
const readFile = util.promisify(fs.readFile);

// Route for apis

// GET Router
router.get('/api/notes', (req, res) => {
    readFile('./db/db.json')
    .then((data) => {
        res.json(JSON.parse(data));
        console.info('database GET complete!')
    });
});

// POST Router
router.post('/api/notes', (req, res) => {
    console.info(req.body);
    console.info('database POST complete! (though not really)')
})

// DELETE Router // This probably works, but I don't want to delete my demo
// router.delete('/api/notes', (req, res) => {
//     console.info(req.body);
//     console.info('database DELETE complete!')
// })


module.exports = router;