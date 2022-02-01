var express = require('express');
var routerhs = express.Router();

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const verifyToken = require("../auth");

dotenv.config();
    
routerhs.get('/jwt', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com'
    }
    console.log(process.env.JWT_SECRET_KEY);
    var signOptions = {
        issuer: 'authsite',
        expiresIn: "1h",
        algorithm: "HS256"
    };
    /*
      Algorithm : 
      symetric / asymetric
      HS256 -default  || RSASSA [ "RS256", "RS384", "RS512" ]
    */

    jwt.sign(user, process.env.JWT_SECRET_KEY, signOptions, (err, token) => {
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

routerhs.get('/jwtdecode', verifyToken, (req, res) => {
    res.json({
        authData
    });
});


routerhs.get('/auth', verifyToken, (req, res) => {

    res.json({
        data: req.authData
    });
});
  
module.exports = routerhs