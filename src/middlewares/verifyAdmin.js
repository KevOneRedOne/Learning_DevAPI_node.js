const jwt = require('jsonwebtoken');

function verifyAdmin(req, res, next){
    if(!req.userToken.isAdmin){
        return res.status(401).send({
            message: "Unauthorized, must be admin",
            auth: false,
        });
    }
    next(); 
};

module.exports = verifyAdmin;