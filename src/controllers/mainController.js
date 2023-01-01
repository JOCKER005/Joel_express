const Product = require ('../data/models/Product');

module.exports = {
    home: async function (req, res) { 
        const product = await Product.find({});
        // console.log(product)
        res.render('home', {products: product});
    },
    products: async function (req, res) { 
        const product = await Product.find({});
        // console.log(product)
        res.render('products/products', {products: product});
    }, 
};

// exportando
