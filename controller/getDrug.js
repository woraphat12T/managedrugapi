const express = require('express');
require('../config/connect')
const getDrug = express.Router();
const { Drug } = require('../model/drug')

getDrug.post('/getDrug', async(req, res) => {
  try {

    const data = await Drug.find().exec();
  

     res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }

});
 
 
module.exports = getDrug;

