const uuid = require('../public/assets/js/uuid');
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const { nextTick } = require('process');
const { parse } = require('path');

// Promisify the fs.readfile method
const readFile = util.promisify(fs.readFile);

// ---------------- Routes for apis ---------------- //

// GET Route
router.get('/api/notes', (req, res) => {
    readFile('./db/db.json')
    .then((data) => {
        res.json(JSON.parse(data));
        console.info('database GET complete!')
    });
});

router.post('/api/notes/', (req, res) => {
    readFile('./db/db.json')
    .then((data) => {
        // Randomize id
        id = uuid();

        // Define the new object to be placed in the db
        payload = {
            title: req.body.title,
            text: req.body.text,
            id
        }

        // Parse the data
        const parsedData = JSON.parse(data);

        // Update parsedData Object
        parsedData.push(payload);

        // Overwrite the db.json file with new array
        fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) => {
            err ? console.error(err) : console.info(`Data written to ./db/db.json`)
            // console.log('Parsed Data After Push', parsedData); // Working
            
            res.json(JSON.parse(data)); // not sure why I couldn't use 'parsedData here'
            console.info('database POST complete!')
            return parsedData; // not sure why everything breaks without this return?
        })
    })
})

// DELETE Route
router.delete('/api/notes/:id', (req, res) => {
    readFile('./db/db.json')
    .then((data) => {
        // Parse the data
        const parsedData = JSON.parse(data);

        // Find the target ID for the deletion
        const idTarget = req.url.substring(11);
        console.info('idTarget: ', idTarget); // Working


        // Set up the index search and remove object from array
        const index = parsedData.map(note => note.id).indexOf(idTarget);
        // console.log('data.map array: ', parsedData.map(note => note.id)); // Working
        // console.log('index value: ', index); // Working

        // Don't delete the instructions
        if (index === -1) {
            res.json(JSON.parse(data));
            console.info('database GET complete!')
            return parsedData
        } else {
            parsedData.splice(index, 1);
            console.log(parsedData);
        
            // Overwrite the db.json file with new array
            fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) => {
                err ? console.error(err) : console.info(`Data written to ./db/db.json`);
                // console.log('Parsed Data After Push', parsedData); // Working
                
                // not sure why I couldn't use 'parsedData here'
                res.json(JSON.parse(data)); 

                console.info('database DELETE complete!')

                // not sure why everything breaks without this return?
                return parsedData; 
            })
        }   
    })
})

module.exports = router;