const express = require('express');
const postUsers = require('../controllers/postUsers');
const postProyect = require('../controllers/postProyect');
const getUsers = require('../controllers/getUsers');
const postAdmin = require('../controllers/postAdmin');
const getUserByEmail = require('../controllers/getUserByEmail');
const getProyects = require('../controllers/getProyects');
const router = express.Router();

router.get('/users', getUsers)
router.get('/proyects', getProyects)
router.get('/users/email', getUserByEmail)
router.post('/login', postUsers)
router.post('/proyect', postProyect)
router.post('/admin', postAdmin)

module.exports = router