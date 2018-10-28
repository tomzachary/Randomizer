import express from 'express';
import mongoose from 'mongoose';
import Task from './models/todoListModel';
import Item from './models/dao/itemSchema';
import ItemMagicBonus from './models/dao/itemSchema';

import bodyParser from 'body-parser';
import taskroutes from './api/routes/todoListRoutes';
import itemRoutes from './api/routes/itemRoutes';
var app = express();
//define port if no port given in env file
var port = process.env.PORT || 3000;

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Register routes
taskroutes(app);
itemRoutes(app);

//Add error handling middleware
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + " not found"})
});

app.listen(port);


console.log("todo list RESTful API server started on: " + port);