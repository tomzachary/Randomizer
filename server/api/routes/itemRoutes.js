'use strict'
import item from '../controllers/itemController';

module.exports = function(app) {

  //item Routes
  
  app.route('/createItem')
  .get(item.create_item)
  .post(item.post_item)


  //magicItem
  app.route('/createMagic')
  .post(item.create_magic);
};