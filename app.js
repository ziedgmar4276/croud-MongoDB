const express = require("express");
const  mongoose = require("mongoose");
import  livre from "./models/livre" ;
import Auteur from "./models/Auteur";;
import Relation from "./models/Relation";
const app = express();
mongoose.connect(
    "mongodb://localhost:27017/Bibliothèque",
  { useNewUrlParser: true ,useUnifiedTopology:true},
    () => console.log("Connected to DB!")
);
app.use(express.json());
app.post("/api/Auteur/", async (req, res)  =>{
const newAuteur =new Auteur({
    Nom_Auteur:req.body.Nom_Auteur,
    Prenom_Auteur:req.body.Prenom_Auteur,
    Domicile:req.body.Domicile,
    Numero:req.body.Numero

});
newAuteur.save().then(
    (req) => {

        res.status(200).json(req);
    }, (err) => {
        res.status(500).json({ error: err });
    }
);
});
app.get("/api/Auteur/", (req, res) => {
    Auteur.find().then(req => {
        if (req) {
            res.status(200).json(req);
        } else {
            res.status(500).json({ message: "Auteur not found" });
        }
    });
});
///////////////////////
app.post("/api/Livre/", async (req, res)  =>{
    const newLivre =new livre({
        Titre:req.body.Titre,
        Prix:req.body.Prix,
        Numero:req.body.Numero
    
    });
    newLivre.save().then(
        (req) => {
    
            res.status(200).json(req);
        }, (err) => {
            res.status(500).json({ error: err });
        }
    );
    });
    app.get("/api/Livre/", (req, res) => {
        livre.find().then(req => {
            if (req) {
                res.status(200).json(req);
            } else {
                res.status(500).json({ message: "livre not found" });
            }
        });
    });

/// PORT NODE  JS
app.listen(5000, () => console.log("server up and runnig 5000"));