const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  console.log(req.headers);
  // Récupérer le token dans le header
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({
      message: 'No token provided',
      auth: false,
      token: null,
    });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, jwtDecoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized',
        auth: false,
        token: null,
      });
    }
    req.userToken = jwtDecoded;
    next(); // permet de passer à la fonction suivante, dans le controleur user
    console.log(jwtDecoded);
  });
}

module.exports = verifyToken;
