const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const { nextTick } = require('process');
const { parse } = require('path');

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
router.post('/api/notes/', (req, res) => {
    console.info(req.body);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            // console.log('Parsed Data Before Push', parsedData); // Working
            parsedData.push(req.body);
            fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
            err ? console.error(err) : console.info(`Data written to ./db/db.json`));
            // console.log('Parsed Data After Push', parsedData); // Working

        }
    })

    console.info('database POST complete!')
})

// DELETE Router 
router.delete('/api/notes/:id', (req, res) => {
    console.info(req.body);
    // Add in a code just like the POST code, but it needs to delete the specific entry from the array
    console.info('database DELETE complete!')
})


module.exports = router;