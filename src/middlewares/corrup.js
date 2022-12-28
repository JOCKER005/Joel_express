const fs = require('fs');

module.exports = (req, res, next) => {
    //verificando usuario
    if (req.session.usuario) {
        res.redirect('/home');
    } else {
        next();
    }
};