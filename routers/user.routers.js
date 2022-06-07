const express = require('express');

const checkAuth = require('../middleware/checkAuth.middleware');
const userController = require('../controllers/user.controller');
const router = express.Router(); 

router.get('/me', checkAuth, userController.me); 

module.exports = router