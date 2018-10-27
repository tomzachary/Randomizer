'use strict'

import mongoose from 'mongoose';
import Item from '../models/item';
var ItemSchema = mongoose.model('Items');
var MagicSchema = mongoose.model('ItemMagicBonus')
// exports.list_all_tasks = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

exports.create_item = function(req, res){
    var item = new Item();
    var genericItems;
    //Get default
    ItemSchema.find({}, function(err, item){
        genericItems = item;
        var index = Math.floor(Math.random() * genericItems.length);

        var dbItem = genericItems[index];
        Item.name = dbItem.name;

        res.json(item);
    });
  
}
exports.post_item = function(req, res) {
    var new_item = new ItemSchema(req.body);
    new_item.save(function(err, item) {
      if (err)
        res.send(err);
      res.json(item);
    });
  };
exports.create_magic = function(req, res){
    var new_magic = new MagicSchema(req.body);
    new_magic.save(function(err, magic) {
      if (err)
        res.send(err);
      res.json(magic);
    });
};
