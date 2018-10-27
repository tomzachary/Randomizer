'use strict'
import todoList from '../controllers/itemController';

module.exports = function(app) {

  //item Routes
  
  app.route('/createItem')
  .get(todoList.create_item);

};