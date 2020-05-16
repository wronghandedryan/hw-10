const express = require('express');
const dotenv = require('dotenv');

// LOAD env vars
dotenv.config({
    path('app.js')
});

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port $ {PORT}`));