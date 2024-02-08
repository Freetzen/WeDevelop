const express = require('express');
const postUsers = require('../controllers/postUsers');
const postForm = require('../controllers/postForm');
const router = express.Router();


router.post('/login', postUsers)
router.post('/form', postForm)

module.exports = router