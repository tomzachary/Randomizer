
var ItemSchema = mongoose.model('Items');
import mongoose from 'mongoose';


exports.getAllItems = async function(){
    return await ItemSchema.find({});
};