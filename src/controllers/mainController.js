const path = require('path');
const fs = require('fs');
// require tercers
const pathJson = path.resolve(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(pathJson, 'utf8');
const products = JSON.parse(productsJson);

const mainController = {
    home: (req, res) => { 
        res.render('home', {products: products});
    },
    products:(req, res) => {
        res.render('products/products', {products: products});
    }, // sacamos la funcion de router
    detalles: (req, res) => { 
        products.forEach(product => {
            if (product.id == req.params.id) {
                res.render('products/detalles', {products: product})
            }
        })
        res.redirect('/not-found');
        console.log(req.params.id);
    }
}

// exportando
module.exports = mainController ;