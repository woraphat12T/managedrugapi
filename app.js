const express = require('express')

const app = express() ;
const cors = require('cors')
app.use(express.json())

  app.use(cors());

//authen
const user = require('./route/user')
const drug = require('./route/drug')
const requisition = require('./route/requisition')
const receipt = require('./route/receipt')


const user_boq = require('./route/boq/user')

app.use('/drug',user)
app.use('/drug',drug)
app.use('/drug',requisition)
app.use('/drug',receipt)

app.use('/boq',user_boq)

// require('./cronjob/main');

module.exports = app

