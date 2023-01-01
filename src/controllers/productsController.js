const Product = require ('../data/models/Product')


const productsController = {
    detalles: async (req, res) => { 
            const product = await Product.findById(req.params.id);
            res.render('products/detalles', {products: product})
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: async (req, res) => { 
            const product = await Product.findById(req.params.id);
            res.render('products/edit', {products: product})
            
    },   
    store: async (req, res) => {
        if(!req.file){
            return res.send("tuqi, El formato de la imagen no es el adecuado, asegurate de estar enviando un formato imagen");
        }
        await Product.create({...req.body, images: req.file.filename, color: "text-bg-primary "});
        return res.render('products/create');
   },
   remove: async (req, res) => {
        const product = await Product.find({});
        const idGet = req.params.id;
        console.log("SE HA ELIMINADO EL PRODUCTO CON EL ID " + idGet);
        await Product.deleteOne({ "_id": idGet });
        
        res.render('products/products', {products: product});
   },
   editado: async (req, res) => {
        const idGet = req.body.id;
        const name = req.body.name;
        const brand = req.body.brand;
        const price = req.body.price;
        const description = req.body.description;
        let images = req.body.images;

        if (images === ''){
            const product_img = await Product.find({"_id": req.body.id});
            images = product_img[0].images;
        } 
        
        await Product.findOneAndUpdate ({"_id": req.body.id}, { "name": name, "brand": brand, "price": price, "description": description, "images": images});
        const product = await Product.find({});
        res.render('products/products', {products: product});

        

    }
}
module.exports = productsController ;     




        











// const lastProduct = products[products.length - 1];
        // const newProduct = {
        //     id: lastProduct.id + 1,
        //     ...req.body,
        //     price: Number(req.body.price),
        //     images: req.file.filename,
        //     color: "text-bg-primary "
        // };
        // products.push(newProduct);
        // fs.writeFileSync(pathJson, JSON.stringify(products, null, 2));
    
 


// exportando
