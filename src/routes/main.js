//rutas generales y estaticas
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home );




// exportar todo siempre
module.exports = router;