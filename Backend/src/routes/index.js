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
const getReviewAvarage = require('../controllers/getReviewAvarage');
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
router.post('/reviews', postReviews);
router.get('/reviews', getReviews);
router.get('/reviewsRating', getReviewAvarage);

module.exports = router