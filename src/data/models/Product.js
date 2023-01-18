const {Schema, model} = require ('mongoose');
 
const Product = new Schema({
    name: {
        type: String,
        required: true
    }, 
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = model('Product', Product)