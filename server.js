
const express = require('express');

const bodyParser = require("body-parser");
const fs = require("fs");


const database = require('./config/dbconfig');
database.init()


  const server = express();

  /* Express configuration */
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());

  /* Router configuration */
  const REST_API_ROOT = '/api';
  server.use(REST_API_ROOT, require('./routes/router'));

  server.use('/static',express.static('static'));


  server.get('/endpoint',(req,res)=>{
    res.redirect(REST_API_ROOT+'/equipement/')
  });
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
