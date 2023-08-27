const express = require('express');
const router = express.Router();

const addDrug = require('../controller/addDrug');
const getDrug = require('../controller/getDrug');

router.use('/drug', addDrug);
router.use('/drug', getDrug);

module.exports = router