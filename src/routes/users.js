// rutas dinamicas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');// requerimos el objeto con los list
//const middle = require('../middlewares/corrup');

// router.get('/', controller.products )//requerimos la funcion del objeto controller y lo accedemos a travez de .list



// exportar todo siempre
module.exports = router;