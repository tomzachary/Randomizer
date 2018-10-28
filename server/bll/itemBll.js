
import Item from '../models/item';
var ItemSchema = mongoose.model('Items');
import mongoose from 'mongoose';

exports.createItem = async function(req){
     var item = new Item();
     var genericItems;
     //Get default
     genericItems = await test();
    
         //genericItems = item;
         var index = Math.floor(Math.random() * genericItems.length);

         var dbItem = genericItems[index];
         item = dbItem;
         return item;
};
var test = async function(){
    return await ItemSchema.find({});
}