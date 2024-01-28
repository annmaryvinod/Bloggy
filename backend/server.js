//this is the entry file for the express i.e we register the express js here

//require the express 
const express = require('express');

//express app can be stored in the constant app
const app = express();

//listening for requests
app.listen(4000,()=>{
    console.log('listening on port 4000');
})