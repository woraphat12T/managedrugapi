const mongoose = require('mongoose');

 const userSchema = mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        userName:{type:String,require:[true, "plase input name" ]},
        passWord:{type:String,require:true},
    },
    {
        timestamps:true
    }
 )

 
 const User = mongoose.model('User',userSchema);
 module.exports = { User };