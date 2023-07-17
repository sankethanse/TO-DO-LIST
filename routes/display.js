const express = require('express');
const router = express.Router();
const homeController= require('../controllers/create_todolist')

router.post('/create-todolist', homeController.Todolist)

module.exports = router;
