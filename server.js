// Set up requirements
const express = require('express');
const htmlRouter = require('./routes/htmlRoutes.js');

// Set up express as an app
const app = express();

// Set up PORT
const PORT = process.env.PORT || 3001;

// Import our routes
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/', htmlRouter);  

// Starting server on PORT
app.listen(PORT, () => console.log(`Listening to server on ${PORT}`))

