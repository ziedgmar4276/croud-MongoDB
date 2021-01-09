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
},
Auteurs :
    [{type:mongoose.Schema.Types.ObjectId,ref:"Auteur"}]


});
module.exports= mongoose.model("Livre",Livre);