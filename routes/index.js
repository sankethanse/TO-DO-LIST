const express = require('express');
const router = express.Router();
const homeController= require('../controllers/home_page')
const db= require('../config/config');
const Todolist = require('../models/to_do_list')

// console.log('sanket hanse is here');
router.get('/', homeController.home);
router.use('/', require('./display'))
router.use('/', require('./delete'))

module.exports = router;