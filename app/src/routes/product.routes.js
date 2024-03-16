

const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product.controllers');

// Llamar a la función "saludar"
router.get('/:nombre', ProductController.saludar);
//router.get('/', ProductController.saludar);
router.get('/', ProductController.findAll);
router.post('/create', ProductController.create);
router.put('/update', ProductController.update);




module.exports = router