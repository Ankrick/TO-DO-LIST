const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/Todocontroller');


router.get('', TodoController.index);
router.post('', TodoController.create);
router.get('/:id', TodoController.ReadOne);
router.patch('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);

module.exports = router;
