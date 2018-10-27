'use strict'

import mongoose from 'mongoose';
import ItemClass from '../models/item';
var Item = mongoose.model('Item');

// exports.list_all_tasks = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

exports.create_item = function(req, res){

    //Get default
    Item.find({}, function(err, item){
    });
}


