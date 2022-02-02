var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken');
const routehs=require("./routeHs256"); 
const routers=require("./routeRs256");
const routefr=require("./fileread");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    var token = {"token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJicmFkIiwiZW1haWwiOiJicmFkQGdtYWlsLmNvbSIsImlhdCI6MTY0MzcxODUxMCwiZXhwIjoxNjQzNzIyMTEwLCJpc3MiOiJhdXRoc2l0ZVJTMjU2In0.Q6ydm1BInWm-Sw3SmhIp31NGTYj1bjJDiDc8TPFmEd9fidksGFli0kawCM7n7gLBYVtnlJGjCHtXvuuYqVJymWQjzt7s-fxjqUrYOn_xne11W-CcyScJ57cMcQsIz4Za33KYDFTAtAnfDSw0Kk-gi2kjrwn93JZJbrK6jSnqIuvkpYpcNJAHS0gRqhPAk1o9VBAujnFFiQ-Ys5KOLFVLIiReonYqGJhqGEqb7K96nTJeoEvUO48GYKwAHAIyyKojzHm1O_KlFxuR-X5QQchq_Ec0M9O_uKMsAVsBK4GU7S_7XYc8hvzn7nwN150LWm2Yns3eR7RpFQd_hlmiMyVSEg"}


    req.token = token.token;
    next()
})

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});
  
router.use("/fr",routefr);
router.use("/hs",routehs);
router.use("/rs",routers);


module.exports = router