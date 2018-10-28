'use strict'

import mongoose from 'mongoose';
import ItemBll from '../../bll/itemBll';
var ItemSchema = mongoose.model('Items');
var MagicSchema = mongoose.model('ItemMagicBonus')

exports.create_item = async function(req, res){
  res.json( await ItemBll.createItem(req));
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
