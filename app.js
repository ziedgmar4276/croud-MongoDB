import  express from"express";
import  mongoose from "mongoose";
import  livre from "./models/livre";
import  Auteur from "./models/Auteur";

import  {LivreValidation,AuteurValidation} from './middlewares/verification_data';
const app = express();
mongoose.connect(
    "mongodb://localhost:27017/Bibliothèque",
  { useNewUrlParser: true ,useUnifiedTopology:true},
    () => console.log("Connected to DB!")
);
app.use(express.json());
/////////////////////////////////////////add  auteur  
app.post("/api/Auteur/", async (req, res)  =>{
    const { error } = AuteurValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);
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
//////////////////////////////////////////////////get  all  auteur  
app.get("/api/Auteur/", (req, res) => {
    Auteur.find().then(req => {
        if (req) {
            res.status(200).json({success:true,req});
        } else {
            res.status(500).json({success:false, message: "Auteur not found" });
        }
    });
});
///////////////////////////////////////////////////////:get  auteur  bu id
app.get("/api/Auteur/:id",(req,res)=>{

    Auteur.findOne({ _id:req.params.id}, (err, rec) => {
        if (err){
            res.status(400).json({success:false, err: err ,message:"auteur not found or  id  faild"});

        }else{
            res.status(200).json({scucess:true,auteur:rec});
        }
    })
});
// /////////////////////////////////////////////// add  livre
app.post("/api/livre/", async (req, res)  =>{
    
 //   const { error } = LivreValidation(req.body);
   // if (error) return res.status(400).send(error.details[0].message);
    const newLivre =new livre({
        Titre:req.body.Titre,
        Prix:req.body.Prix,
        Numero:req.body.Numero,
        Auteurs:req.body.Auteurs
    
    });
     newLivre.save().then(req=>{
      if(req){
        res.status(200).json({sucess:true,req});
      } else{
        res.status(400).json({ error: err });
      }
    });
}); 

    /////////////////////////////////////////////////get all  livre  
    app.get("/api/livres/", (req, res) => {
        livre.find().then(req => {
            if (req) {
                res.status(200).json({success:true,req});
            } else {
                res.status(400).json({success:false, message: "livre not found" });
            }
        });
    });
    ////////////////////////////////////////////////get find liste  of  livre  of  auteur 
    app.get("/api/Relation/:id",(req,res)=>{
        livre.findById({_id:req.params.id}).populate({path:"Auteur",select: 'name publishYear author'}).then(req => {
            if (req) {
                res.status(200).json({scucess :true,req});
            } else {
                res.status(400).json({scucess:false, message: "livre relation auteur not found" });
            }
        });
    });
    ////////////////////////////////////////////////get  all livre  realtaion with  auteurs  
    app.get("/api/Relation/",(req,res)=>{
        livre.find().populate({path:"Auteur"}).then(req => {
            if (req) {
                res.status(200).json({scucess :true,req});
            } else {
                res.status(400).json({scucess:false, message: "livre relation auteur not found" });
            }
        });
    });

/// PORT NODE  JS
app.listen(5000, () => console.log("server up and runnig 5000"));