const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')
router.get('/projects', controller.getProjects);  
router.post('/submit-form', controller.submitForm);
module.exports = router;