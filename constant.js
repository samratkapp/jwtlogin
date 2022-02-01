const fs = require("fs");


var privateKEY = fs.readFileSync(__dirname + "/secret/private.key");
var publicKEY = fs.readFileSync(__dirname + "/secret/public.key");


module.exports = {
    privateKEY,
    publicKEY
}