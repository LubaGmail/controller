const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// passing a reference to the function
//
router.get('/', productsController.getProducts);

module.exports = router;
