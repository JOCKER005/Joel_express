//rutas dinamicas
const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');
// function multer submit
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/images");
    },
    filename: function (req, file, cb){
        console.log(file)
        const fileExtension = path.extname(file.originalname);
        const randomName = Date.now() + fileExtension;
        cb(null, randomName);
    },
})
// const upload
const upload = multer ({ 
    storage: multerStorage,
    fileFilter: function (req, file, cb){
        const fileExtension = path.extname(file.originalname);
        if (![".jpg", ".png", ".gif"].includes(fileExtension)){
            return cb(null, false);
        }
        cb(null, true);
    },
});


router.get('/', mainController.products);
router.get('/detalles/:id', productsController.detalles) ;
router.get('/create', productsController.create)
router.get('/edit/:id', productsController.edit)
router.post('/create', upload.single("images"), productsController.store)

// router.create('/products/create', userscontroller.create)

module.exports = router;