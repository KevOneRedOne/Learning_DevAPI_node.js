// const jwt = require('jsonwebtoken');

// function verifyAdmin(req, res, next){
//     if(req.userToken.isAdmin){
//         next();
//     } else {
//         return res.status(401).send({
//             message: "Unauthorized",
//             auth: false,
//             token: null
//         });
//     }
// }

// module.exports = verifyAdmin;