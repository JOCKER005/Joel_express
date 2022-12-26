const fs = require('fs');

module.exports = (req, res, next) => {
    //verificando usuario
    if (req.session.usuario) {
        res.redirect('/home');
    } else {
        next();
    }
};
const mostrar = ((req ,res , next) => {
    const url = req.originalUrl;
    fs.writeFileSync('rutas_accedidas.txt', url)
    next();
})
module.exports = mostrar;