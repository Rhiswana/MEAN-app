const express = require('express');
const router = express.Router();
const {getBooks} = require('../controllers/bookController');
console.log(' bookRouter.js loaded');
router.get('/', getBooks);

 module.exports = router;