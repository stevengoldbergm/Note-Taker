// Set up requirements
const express = require('express');
const htmlRouter = require('./routes/htmlRoutes.js');
const apiRouter = require('./routes/apiRoutes.js');


// Set up express as an app
const app = express();

// Set up PORT
const PORT = process.env.PORT || 3001;

// Import our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// Import routers
app.use('/', apiRouter);
app.use('/', htmlRouter);  

// Starting server on PORT
app.listen(PORT, () => console.log(`Listening to server on ${PORT}`))

