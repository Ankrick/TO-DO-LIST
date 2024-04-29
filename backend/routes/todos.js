const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/Todocontroller');


router.get('/:id', TodoController.index);
router.post('/:id', TodoController.create);
router.get('/:id', TodoController.ReadOne);
router.patch('/:id', TodoController.update);
router.delete('/:id', TodoController.delete);
router.delete('', TodoController.deleteAll);

module.exports = router;
