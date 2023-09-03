const mongoose = require('mongoose');

 const cartSchema = mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        userId:{type:String,require:true},
        drugId:{type:String,require:true},
        stock:{type:Number,require:true},
    },
    {
        timestamps:true
    }
 )

 
 const Cart = mongoose.model('Cart',cartSchema);
 module.exports = { Cart };