
import './App.css';

function App() {
  return (
  
<div class="container">   

<div class="row align-items-center">
<div class="col-4">
  <fieldset border="1">
  <table>
  <tr>
    <td><label>Nom :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  <tr>
    <td><label>Prenom :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  <tr>
    <td><label>Domcile :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  <tr>
    <td><label>Numbero :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  
  </table>
  </fieldset>
  </div>
  
  <div class="col-6 col-sm-3">
  <input type="button" value="Ajoute" />
  </div>
  </div>
  <hr></hr>

  <div class="row align-items-center">
<div class="col-4">
  <table>
  <tr>
    <td><label>Titre:</label></td>
    <td><input type ="text"></input></td>
  </tr>
  <tr>
    <td><label>Prix :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  <tr>
    <td><label>Numbero :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  
  </table>
  </div>
  
  <div class="col-6 col-sm-3">
  <input type="button" value="Ajoute" />
  </div>
  </div>
  <hr></hr>
  
  <div class="row align-items-center">
<div class="col-4 ">
  <table>
  <tr>
    <td><label>Titre:</label></td>
    <td><input type ="text"></input></td>
  </tr>
  
  <tr>
    <td><label>Nom Auteur :</label></td>
    <td><input type ="text"></input></td>
  </tr>
  </table>
  </div>
  
  <div class="col-6 col-sm-3">
  <input type="button" value="Ajoute" />
  </div>
  </div>
    
  <div class="row align-items-start">
    <div class="col">
    <input type="button" value="Demonstration" ></input>
    </div>
  <div class="col">
    <input type="button" value ="Affiche la liste des livres" ></input>
  </div>
  <div class="col">
    <input type="button"  value="Affiche la liste d'auteur"></input>
  </div>
  </div>
</div>
  
  );
}

export default App;
