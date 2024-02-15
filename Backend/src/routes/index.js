const express = require('express');
const postUsers = require('../controllers/postUsers');
const postProject = require('../controllers/postProject');
const getUsers = require('../controllers/getUsers');
const postAdmin = require('../controllers/postAdmin');
const postReviews = require('../controllers/postReviews');
const getReviews = require('../controllers/getReviews');
const getUserByEmail = require('../controllers/getUserByEmail');
const getProjects = require('../controllers/getProjects');
const getProjectById = require('../controllers/getProjectById');
const putProject = require('../controllers/putProject');
const getProjectByName = require('../controllers/getProjectByName');
const getProjectByCategory = require('../controllers/getProjectByCategory');
<<<<<<< HEAD
const getReviewAvarage = require('../controllers/getReviewAvarage');
=======
const putUser = require('../controllers/putUser');
>>>>>>> a0fc8fd45bfc513a0d8a53d8d8f10d8b161dc8b6
const router = express.Router();

router.get('/projects/category', getProjectByCategory)
router.get('/projects/name', getProjectByName)
router.get('/projects/:id', getProjectById)
router.get('/projects', getProjects)
router.get('/users', getUsers)
router.get('/users/email', getUserByEmail)
router.post('/login', postUsers)
router.post('/projects', postProject)
router.post('/admin', postAdmin)
router.put('/projects', putProject)
<<<<<<< HEAD
router.post('/reviews', postReviews);
router.get('/reviews', getReviews);
router.get('/reviewsRating', getReviewAvarage);
=======
router.put('/users', putUser)
>>>>>>> a0fc8fd45bfc513a0d8a53d8d8f10d8b161dc8b6

module.exports = router