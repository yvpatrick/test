const express= require('express');
const http = require('http');
const app = express();
const studentapi = require('./restapi/contactapi');
const videoapi = require('./restapi/videoapi');

const mongoose = require ('mongoose');
const bodyparser = require ('body-parser');
const cors=require('cors');
mongoose.connect('mongodb://yash:pass123@ds135724.mlab.com:35724/proton',{useNewUrlParser:true});
app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
app.use('/',studentapi);
app.use('/',videoapi);

http.createServer(app).listen(process.env.PORT || 3000);
console.log("Backend Server Is On" , process.env.PORT || 3000);