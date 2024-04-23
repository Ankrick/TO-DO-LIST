const express = require('express');
const router = express.Router();
const User = require('../models/user');
const UserController = require('../controllers/UserController');
const { body } = require('express-validator');
const ErrorHandler = require('../middleware/ErrorHandler');

router.get('', UserController.index);
router.post('/login', UserController.login);
router.post('/register', [
    body('email').notEmpty(),
    body('name').notEmpty(),
    body('pw').notEmpty()
], ErrorHandler, UserController.register);
router.delete('', UserController.destroyAll);
router.delete('/:id', UserController.destory);

module.exports = router;