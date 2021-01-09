const express = require("express");
const  mongoose = require("mongoose");
import  livre from "./models/livre" ;
import Auteur from "./models/Auteur";
const app = express();
mongoose.connect(
    "mongodb://localhost:27017/Bibliothèque",
  { useNewUrlParser: true ,useUnifiedTopology:true},
    () => console.log("Connected to DB!")
);
app.use(express.json());
//add  auteur  
app.post("/api/Auteur/", async (req, res)  =>{
const newAuteur =new Auteur({
    Nom_Auteur:req.body.Nom_Auteur,
    Prenom_Auteur:req.body.Prenom_Auteur,
    Domicile:req.body.Domicile,
    Numero:req.body.Numero,
    livres:req.body.livres

});
newAuteur.save().then(
    (req) => {

        res.status(200).json({success:true,req});
    }, (err) => {
        res.status(500).json({ sucess:false ,error: err });
    }
);
});
//get  all  auteur  
app.get("/api/Auteur/", (req, res) => {
    Auteur.find().then(req => {
        if (req) {
            res.status(200).json({success:false,req});
        } else {
            res.status(500).json({success:false, message: "Auteur not found" });
        }
    });
});
app.get("")
///////////////////////
//  post  livre  
app.post("/api/Livre/", async (req, res)  =>{
    const newLivre =new livre({
        Titre:req.body.Titre,
        Prix:req.body.Prix,
        Numero:req.body.Numero,
        Auteurs:req.body.Auteurs
    
    });
    await newLivre.save();
            const auteur = await Auteur.findById({_id: newLivre.Auteurs})
            auteur.livres.push(newLivre);
    
            res.status(200).json({sucess:true,req});
        }, (err) => {
            res.status(500).json({ error: err });
        }
);
    ///get all  livre  
    app.get("/api/Livre/", (req, res) => {
        livre.find().then(req => {
            if (req) {
                res.status(200).json({success:true,req});
            } else {
                res.status(500).json({success:false, message: "livre not found" });
            }
        });
    });
    //get find liste  of  livre  of  auteur 
    app.get("/livre/:id",(req,res)=>{
        livre.findById({_id:req.params.id}).populate({path:"Auteur",select: 'name publishYear author'}).then(req => {
            if (req) {
                res.status(200).json({scucess :true,req});
            } else {
                res.status(500).json({scucess:false, message: "livre relation auteur not found" });
            }
        });
    });
    //get  all livre  realtaion with  auteurs  
    app.get("/livre/",(req,res)=>{
        livre.find().populate({path:"Auteur"}).then(req => {
            if (req) {
                res.status(200).json({scucess :true,req});
            } else {
                res.status(500).json({scucess:false, message: "livre relation auteur not found" });
            }
        });
    });
/// get all  livre  realtion with  aut
/// PORT NODE  JS
app.listen(5000, () => console.log("server up and runnig 5000"));