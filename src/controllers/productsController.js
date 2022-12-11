const path = require('path');
const fs = require('fs');
// require tercers
const pathJson = path.resolve(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(pathJson, 'utf8');
const products = JSON.parse(productsJson);

const productsController = {
    detalles: (req, res) => { 
        products.forEach(product => {
            if (product.id == req.params.id) {
                res.render('products/detalles', {products: product})
            }
        })
        res.redirect('/not-found');
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: (req, res) => {
        res.render('products/edit');
    }   
}

// exportando
module.exports = productsController ;