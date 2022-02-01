var express = require('express');
var routerrs = express.Router();
const jwt = require('jsonwebtoken'); 
const verifyTokenre256 = require("../auth/auth"); 

const constant = require("../constant");
    ;

routerrs.get('/auth', verifyTokenre256, (req, res) => {

    res.json({
        data: req.authData
    });
});


routerrs.get('/jwt', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    }

    var signOptions = {
        issuer: 'authsiteRS256',
        expiresIn: "1h",
        algorithm: "RS256"
    };
    /*
      Algorithm : 
      symetric / asymetric
      HS256 -default  || RSASSA [ "RS256", "RS384", "RS512" ]
    */

    jwt.sign(user, constant.privateKEY, signOptions, (err, token) => {
        if (err) {
            res.json({
                err
            });
        }
        res.json({
            token
        });
    });
});

 
module.exports = routerrs