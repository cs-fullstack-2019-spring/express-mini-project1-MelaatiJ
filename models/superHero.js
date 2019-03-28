//models require mongoose, so import mongoose //
const mongoose = require("mongoose");
//import schema//
const Schema = mongoose.Schema;


//Model for superhero application //
const SuperHeroSchema = new Schema(
    {
        id:Number,
        name:String,
        power:{
            intelligence:Number,
            strength:Number,
            speed:Number,
            combat : Number,
            wealth : Number,
            image:String,
        }
    }
);


// export model //
module.exports = mongoose.model("TeamVigilante", SuperHeroSchema);