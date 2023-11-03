const express = require('express')

require('../../config/connect')
const login = express.Router()
const { User } = require('../../model/user')

login.post('/login', async(req, res) => {
    try {
        const login = await User.findOne(req.body).exec();
        if(!login)
            res.status(401).json({ error: "Invalid username or password" });
        }else{
            res.json({ fullname: login.fullName,id:login.id,role:login.role  } );
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred during user creation.' });
    }

})


module.exports = login;

