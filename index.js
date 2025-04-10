
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

// Parse data
app.use(express.json());

// Cath async errors
require('express-async-errors');

// DB Connection
// const dbConnection = require('./src/dbConnection');
// dbConnection();
require('./src/dbConnection')();

/*------------------------------------------------------- */
// Main Route:
app.all('/', (req, res) => res.send('Welcome to Blog API'));

// Blog Route

// User Route


/*------------------------------------------------------- */

// Error Handler:

/*------------------------------------------------------- */

app.listen(PORT, () => console.log('Running at http://127.0.0.1:' + PORT));










