const express = require('express');
const postUsers = require('../controllers/postUsers');
const postForm = require('../controllers/postForm');
const getUsers = require('../controllers/getUsers');
const postAdmin = require('../controllers/postAdmin');
const router = express.Router();


router.get('/users', getUsers)
router.post('/login', postUsers)
router.post('/form', postForm)
router.post('/admin', postAdmin)

module.exports = router