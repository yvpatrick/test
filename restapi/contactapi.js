var express = require('express');
var router = express.Router();
var StudentCollection = require('../models/contactmodel');
router.post('/Add', (req, res) => {
    var st = new StudentCollection({
        Name: req.body.Name,
        Email: req.body.Email,
        Subject: req.body.Subject,
        Text: req.body.Text
    });
    st.save((err, data) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ studentrecord: data });
    });
});
var SCollection = require('../models/signmodel');
router.post('/SignUp', (req, res) => {
    var st = new SCollection({
        Name: req.body.Name,
     Address: req.body.Address,
        Email: req.body.Email,
        
        Password: req.body.Password
    });
    st.save((err, data) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ studentrecord: data });
    });
});
router.post('/userLogin',(req,res)=>{
    SCollection.find({$and:[{"Email":req.body.Email},{"Password":req.body.Password}]},
(err,data)=>{
    if(err)
    res.status(500).json({ errmsg: err });
        res.status(200).json({ studentrecord: data });
}) ;  
});

module.exports = router;
