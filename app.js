'use strict'

const express = require('express');
const path = require('path');


const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });
//app.get('/', (req, res) => {
 //   res.send('Hello world!\n')
//})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)