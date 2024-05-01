const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/:id', CategoryController.index);
router.post('/:id', CategoryController.create);
router.delete('', CategoryController.deleteAll);


module.exports = router;
