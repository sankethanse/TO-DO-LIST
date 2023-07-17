const express = require('express');
const router = express.Router();
const homeController= require('../controllers/delete_todolist')

router.post('/delete-todolist', homeController.deletteTodo);

module.exports = router;
