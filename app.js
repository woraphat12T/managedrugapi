const express = require('express')

const app = express() ;
const cors = require('cors')
app.use(express.json())

  app.use(cors());

//authen
const user = require('./route/user')
const drug = require('./route/drug')



app.use('/drug',user)
app.use('/drug',drug)

// require('./cronjob/main');

module.exports = app

