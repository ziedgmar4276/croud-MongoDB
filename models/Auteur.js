const mongoose = require("mongoose");

const Auteur =new  mongoose.Schema({
Nom_Auteur:{
    type:String,
    required:true,
},
Prenom_Auteur:{
    type:String,
    required:true,
},
Domicile:{
    type:String,
    required:true,
},
Numero:{
    type:Number,
    required:true,
},

});
module.exports= mongoose.model("Auteur",Auteur)