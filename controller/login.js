const express = require('express');

const login = express.Router();

login.post('/login', async (req, res) => {
    try {
       res.status(200).json('success')
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Invalid req' });
      }
});

module.exports = login;
