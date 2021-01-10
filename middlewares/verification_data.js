import Joi from 'joi';
const AuteurValidation = (data)=>{
const schema =Joi.object({
    Nom_Auteur:Joi.string().required(),
    Prenom_Auteur:Joi.string().required(),
    Domicile:Joi.string().required(),
    Numero:Joi.number().required(),
    livres:Joi.array()
});
return schema.validate(data);
};
const LivreValidation = (data)=>{
    const schema =Joi.object({
        Titre:Joi.string().required(),
        Prix:Joi.number().required(),    
        Numero:Joi.number().required(),
        Auteurs:Joi.array()
    });
 return schema.validate(data);
};
module.exports.AuteurValidation =AuteurValidation;
module.exports.LivreValidation =LivreValidation;

