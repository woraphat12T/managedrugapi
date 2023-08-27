const express = require('express');
require('../config/connect')
const addDrug = express.Router();
const { Drug } = require('../model/drug')

addDrug.post('/addDrug', async(req, res) => {
  try {

    const id_count = await Drug.findOne().sort({ id: -1 }).exec();
    if(id_count === null){
        var idIncret = 1
    }else{
        var idIncret = id_count.id + 1
    }
   
    const { nameDrug, dose, doseType,qty,qtyType,pricePerQty,stock,status } = req.body;

    const newDrug = new Drug({
        id:idIncret,
        nameDrug,
        dose,
        doseType,
        qty,
        qtyType,
        pricePerQty,
        stock,
        status
    });

    await newDrug.save();
 
     res.json({ message: 'Drug added successfully',id_count:id_count});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }

});
 
 
module.exports = addDrug;
