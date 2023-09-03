const express = require('express');
require('../config/connect')
const getDrug = express.Router();
const { Drug } = require('../model/drug')
const { Cart } = require('../model/cart')

getDrug.post('/getDrug', async(req, res) => {
  try {

    const data = await Drug.find().sort({ id: -1 }).exec();

  
     res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }

});

getDrug.post('/getDrugSelect', async(req, res) => {
  try {

    const userId = req.body.userId
    
    const data = await Drug.find().sort({ id: 1 }).exec();
    const dataDrug = []
    for(let i =0 ; i < data.length ; i++){
      const cartData = await Cart.find({userId:userId,drugId:data[i].id}).sort({ id: 1 }).exec();
      console.log(data[i].id);
      if(cartData.length > 0){

      }else{
        const drugall = {
          id:data[i].id,
          nameDrug:data[i].nameDrug+' '+data[i].dose+' '+data[i].doseType,
          qtyType:data[i].qtyType,
          stock:data[i].stock,
          status:data[i].status
        }
        dataDrug.push(drugall)
      }

    }
     res.json(dataDrug);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during user creation.' });
  }

});
 
 
module.exports = getDrug;

