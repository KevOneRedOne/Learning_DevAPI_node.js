const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    console.log(req.headers);
    // Récupérer le token dans le header
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({
            message: "No token provided",
            auth: false,
            token: null
        });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, jwtDecoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized",
                auth: false,
                token: null
            });
        }
        req.userTokenid = jwtDecoded.id;
        console.log(jwtDecoded);
        // req.userToken = jwtDecoded;
        next();
    });
}

module.exports = verifyToken;