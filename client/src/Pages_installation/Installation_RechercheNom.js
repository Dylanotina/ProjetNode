import React from "react";
import Client from "../Client";
import './../css/ville.css';
import './../css/bootstrap1.min.css'
import {Link} from "react-router-dom";

class Installation_RechercheNom extends  React.Component{
    state ={
        installations :[],
        inputValue : null
    }
    handleSearchNomInstallation =()=>{
        Client.searchNomInstallation(this.state.inputValue, installations=>{
            this.setState({
                installations:installations.slice(0,100)
            });
        });
    };

    updateInputValue(evt){
        this.setState({
            inputValue : evt.target.value
        });
    }

render() {
    const foodRows = this.state.installations.map((installation,i)=>(
        <tr class="table-dark">
            <td key={i}>{installation.noDeLInstallation}</td>
            <td key={i}>{installation.nomUsuelDeLInstallation}</td>
            <td key={i}>{installation.codePostal}</td>
            <td key={i}>{installation.nomDeLaCommune}</td>
        </tr>
    ));
    return <div id="tableau-installation">

        <h2> Recherche par Nom d'installation </h2>
        <a href={"http://localhost:3000/"}>
            <button className="btn btn-secondary"> Accueil</button>
        </a>
        <br/><br/>
        <label>Nom de l'installation : </label><input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        <button class="chercher" onClick={this.handleSearchNomInstallation}>CHARGER</button>
        <br/><br/>
        <table class="table table-hover">
            <thead>
            <tr class=" table-warning">
                <th>Numéro de l'installation</th>
                <th>Nom de l'installation</th>
                <th>Code Postal</th>
                <th>Ville</th>
            </tr>
            </thead>
            <tbody>
            {foodRows}
            </tbody>
        </table>


    </div>
    }
}
export default Installation_RechercheNom

