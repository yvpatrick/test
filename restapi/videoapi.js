var express = require('express');
var router = express.Router();
var TechCollection = require('../models/techmodel');
router.post('/addTech', (req, res) => {
    var st = new TechCollection({
        TechName: req.body.Name,
        Des: req.body.des,
        Logo: req.body.Logo,
        Video: req.body.Video
    });
    st.save((err, data) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ studentrecord: data });
    });
});
router.get('/readTech',(req,res)=>{
    TechCollection.find({},(err,data)=>{
    if(err)
    res.status(500).json({ errmsg: err });
        res.status(200).json({ studentrecord: data });
}) ;  
});
module.exports = router;

