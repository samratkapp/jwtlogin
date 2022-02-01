const jwt = require('jsonwebtoken');
const constant = require("../constant");



// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware

        jwt.verify(req.token, publicKEY, (err, authData) => {
            if (err) {
                // Forbidden
                res.sendStatus(403);
            } else {
                req.authData = authData;
                next();
            }
        });
    } else if (req.token) {
        jwt.verify(req.token, constant.publicKEY, (err, authData) => {
            if (err) {
                // Forbidden
                res.sendStatus(403);
            } else {
                req.authData = authData;
                next();
            }
        });
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

module.exports = verifyToken;