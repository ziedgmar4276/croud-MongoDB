const mongoose = require("mongoose");


const Livre =new  mongoose.Schema({
Titre:{
    type:String,
    required:true,
},

Prix:{
    type:Number,
    required:true,
},
Numero:{
    type:Number,
    required:true,
}

});
module.exports= mongoose.model("Livre",Livre);