'use strict';
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

//Item Log
var ItemSchema = new Schema({

    name: {
        type: String,
        required: "name is Required"
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: "description is Required"
    },
    property: {
        type: String,
        required: "property is Required"
    },
    damage: {
        type: String,
        required: "damage is Required"
    },
    weight: {
        type: String,
        required: "damage is Required"
    },
    modifier: {
        type: number,
        required: "modifier is Required"
    },
    powerPoints: {
        type: number,
        required: "powerPoints is required"
    },
    properties: {
        type: {
            type: String
        }
    },
    rarity: {
        type: {
            type: String,
            required: 'rarity is required...'
        }

    }
});

//Item Rarity
var ItemRaritySchema = new Schema({
    name: {
        type: String,
        required: "name is required"
    },
    powerPoints: {
        type: Number,
        required: "powerPoints is required..."
    }
});

//Item Type
var ItemTypeSchema = new Schema({
    name: {
        type: String,
        required: "name is required"
    }
});

//Item Properties
var ItemPropertySchema = new Schema({
    name: {
        type: String,
        required: "name is Required"
    }
});

//Item Creator
var ItemCreatorSchema = new Schema({
    name: {
        type: String,
        required: "name is Required"
    },
    description: {
        type: String,
        required: "description is required..."
    }
});

//Item History
var ItemHistorySchema = new Schema({
    name: {
        type: String,
        required: "name is Required"
    },
    description: {
        type: String,
        required: "description is required..."
    }
});

//Item Minor Property
var ItemMinorPropertySchema = new Schema({
    name: {
        type: String,
        required: "name is Required"
    },
    description: {
        type: String,
        required: "description is required..."
    }
});

//Item Quirk 
var ItemQuirkSchema = new Schema({
    name: {
        type: String,
        required: "name is Required"
    },
    description: {
        type: String,
        required: "description is required..."
    }
});

//Item Magic Level
var ItemMagicBonus = new Schema({
    name: {
        type: String,
        required: "name is Required"
    },
    modifier: {
        type: number,
        required: "modifier is Required"
    },
    powerPoints: {
        type: number,
        required: "powerPoints is required"
    }
});

//Base Item
var ItemBase = new Schema({
    name: {
        type: String,
        required: "name is Required"
    },
    description: {
        type: String,
        required: "description is Required"
    },
    property: {
        type: String,
        required: "property is Required"
    },
    damage: {
        type: String,
        required: "damage is Required"
    },
    weight: {
        type: String,
        required: "damage is Required"
    },
    modifier: {
        type: number,
        required: "modifier is Required"
    },
    powerPoints: {
        type: number,
        required: "powerPoints is required"
    }
});


module.exports = mongoose.model('Items', TaskSchema);