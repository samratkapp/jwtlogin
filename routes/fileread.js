var express = require('express');
var routerfr = express.Router();

const fs = require("fs");


var privateKEY = fs.readFileSync(__dirname +"/../secret/serverKey.pem","utf8");
var publicKEY = fs.readFileSync(__dirname +"/../secret/serverCert.pem","utf8");
var private_1 = fs.readFileSync(__dirname +"/../secret/private_1.pem","utf8");

var public_1 = fs.readFileSync(__dirname +"/../secret/public_1.pem","utf8");

routerfr.get('/read',  (req, res) => {

    res.json({
        public_1
    });
});


module.exports = routerfr
