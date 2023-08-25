const express = require('express')

const app = express() ;
const cors = require('cors')
app.use(express.json())

  app.use(cors());

//authen
const user = require('./route/user')



app.use('/drug',user)

// require('./cronjob/main');

module.exports = app

