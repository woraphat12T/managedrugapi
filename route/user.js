const express = require('express');
const router = express.Router();

const login = require('../controller/login');

router.use('/user', login);

module.exports = router