const mongoose = require('mongoose');

// function
const dbConnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(
        'mongodb://127.0.0.1:27017/TpExpress',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        function (err, res) {
            if (err) {
                console.log('Error conection', err);
            } else{
                console.log('Success Conection');
            }
    });
}

module.exports = dbConnect;