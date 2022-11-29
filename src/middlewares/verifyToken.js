const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    console.log(req.headers);
    // Récupérer le token dans le header
    const token = req.headers;
    //si le token n'existe pas erreur 403 = Forbidden
    //si le token existe, on vérifie qu'il est valide
    // si la verification échoue, on envoie une erreur 403 = Forbidden
    // si la verification est ok, on passe au controller
    next();
}

module.exports = verifyToken;