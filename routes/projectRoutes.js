const express = require('express');
const { protect } = require('../controllers/authController');
const {
  createProject,
  getProject,
  getTeamProject
} = require('../controllers/projectController');

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

// Project routes
router.post('/', createProject);
router.get('/team', getTeamProject);
router.get('/:id', getProject);

module.exports = router; 