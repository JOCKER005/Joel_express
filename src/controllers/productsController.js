const Product = require ('../data/models/Product')


const productsController = {
    detalles: async (req, res) => { 
            const product = await Product.findById(req.params.id);
            res.render('products/detalles', {products: product})
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: (req, res) => {
        products.forEach(product => {
            if (product.id == req.params.id) {
                res.render('products/edit', {products: product})
            }
        })
    },   
    store: (req, res) => {
        if(!req.file){
            return res.send("tuqi, El formato de la imagen no es el adecuado, asegurate de estar enviando un formato imagen");
        }

        const lastProduct = products[products.length - 1];
        const newProduct = {
            id: lastProduct.id + 1,
            ...req.body,
            price: Number(req.body.price),
            images: req.file.filename,
            color: "text-bg-primary "
        };
        products.push(newProduct);
        fs.writeFileSync(pathJson, JSON.stringify(products, null, 2));
        return res.render('products/create');
    
    }
}


// exportando
module.exports = productsController ;