// You will need to lookup and use this package for the UNIQUE IDs (utils, fs, and uuid should all be required and used) (make sure you require it!!!!!)
    // uuid - you can take it it from the existing projects, probably
    // it generates Unique User IDs

// Create variables for readFileAsync and writeFileAsync
    // const readFileAsync = ?
    // const writeFileAsync = ?
// I may not do this, since I already got it working without using the util

class Store{
    // read() // Read the db.json file
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    // write() // Write the current notes
    // return db/db.json(JSON.stringify(note))

    // getNotes() // Pull existing db.json file
    // return read().then(notes) parse notes concat(JSON.parse(note))

    // addNotes() // Push the write object
    // you need to save title, text = note const { title,text} = note;

    // if (!title || !text) throw an error title and notes cannot be blank (use the throw method)

    // add the UNIQUE id to the note using our package
        // Create a new variable to hold our new note with the given id
        // const userNote = { title, text, id = uuid}
    
    // grab all notes, and the new note, and update notes to return the new note [...notes, userNote]


    // deleteNotes()
    // Use the given ID to remove/delete the note
}

module.export = Store; // NOTE! Require the store if you want to use it in the API ROUTES
