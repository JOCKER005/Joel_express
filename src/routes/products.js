//rutas dinamicas
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.products);
router.get('/detalles/:id', mainController.detalles) ;
// router.create('/products/create', userscontroller.create)

module.exports = router;