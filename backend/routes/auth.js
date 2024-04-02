const express = require('express');
const router = express.Router();
const User = require('../models/user');
const controller = require('../controllers/controller');
const { body } = require('express-validator');
const ErrorHandler = require('../middleware/ErrorHandler');

router.get('', controller.index);
router.post('/register', [
    body('email').notEmpty(),
    body('name').notEmpty(),
    body('pw').notEmpty()
], ErrorHandler, controller.register);

module.exports = router;