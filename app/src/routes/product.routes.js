

const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/client.controllers');

// Llamar a la función "saludar"
router.get('/:nombre', ProductController.saludar);
router.get('/', ProductController.saludar);

module.exports = router