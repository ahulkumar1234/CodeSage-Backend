const express = require('express');
const router = express.Router();
const { generateContent } = require('../controller/generate.controller');





router.post('/', generateContent);




module.exports = router



