
import Item from '../models/item';
import ItemDll from '../dll/itemDll';

exports.createItem = async function(req){
     var item = new Item();
     var genericItems;
     //Get default
     genericItems = await ItemDll.getAllItems();
    
         //genericItems = item;
         var index = Math.floor(Math.random() * genericItems.length);

         var dbItem = genericItems[index];
         item = dbItem;
         return item;
};