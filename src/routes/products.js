//rutas dinamicas
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');

router.get('/', mainController.products);
router.get('/detalles/:id', productsController.detalles) ;
router.get('/create', productsController.create)
router.get('/edit', productsController.edit)

// router.create('/products/create', userscontroller.create)

module.exports = router;