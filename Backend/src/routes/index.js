const express = require('express');
const getMusic = require('../controllers/getMusic');
const router = express.Router();

router.get('/music/:title', getMusic)

module.exports = router