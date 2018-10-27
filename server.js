import express from 'express';
import mongoose from 'mongoose';
import Task from './api/models/todoListModel';
import bodyParser from 'body-parser';
import routes from './api/routes/todoListRoutes';
var app = express();
//define port if no port given in env file
var port = process.env.PORT || 3000;

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Register routes
routes(app);

//Add error handling middleware
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + " not found"})
});

app.listen(port);


console.log("todo list RESTful API server started on: " + port);