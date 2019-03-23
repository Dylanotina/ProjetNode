import React from "react";
import Client from "./Client";
import {Link} from "react-router-dom";

export default class Installation extends React.Component{
    state = {
        installations : [],
        inputValue : null
    };
   handleSearchAll = ()=>{
       Client.searchAllInstallation(installations =>{
           this.setState({
               installations : installations.slice(0,100)
           });
       });
   };
   handleSearchVille =()=>{
       Client.searchVille(this.state.inputValue,installations=>{
           this.setState({
               installations :installations.slice(0,100)
           });
       });
   };
   handleSearchCodePostal =()=>{
       Client.searchCodePostal(this.state.inputValue,installations=>{
           this.setState({
               installations :installations.slice(0,100)
           });
       });
   };

   handleSearchNomInstallation =()=>{
       Client.searchNomInstallation(this.state.inputValue, installations=>{
           this.setState({
               installations:installations.slice(0,100)
           });
       });
   };

/*Partie rendu html */
    updateInputValue(evt){
        this.setState({
            inputValue : evt.target.value
        });
    }

     RechercheVille(){
         const foodRows = this.state.installations.map((installation,i)=>(
             <tr>
                 <td key={i}>{installation.noDeLInstallation}</td>
                 <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                 <td key={i}>{installation.codePostal}</td>
                 <td key={i}>{installation.nomDeLaCommune}</td>
             </tr>
         ));
        return (<div id="tableau-installation">
            <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>Nom de la ville
            <button onClick={this.handleSearchVille}>Chercher</button>
            <table>
                <thead>
                <tr>
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
        );
    }

    RechercheCodePostal(){
        const foodRows = this.state.installations.map((installation,i)=>(
            <tr>
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return <div id="tableau-installation">
            <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>Code Postal
            <table>
                <thead>
                <tr>
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

            <button onClick={this.handleSearchCodePostal}>Code Postal</button>
            </div>
    }

    RechercheNomInstallation(){
        const foodRows = this.state.installations.map((installation,i)=>(
            <tr>
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return <div id="tableau-installation">
            <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>Nom de l'installation
            <table>
                <thead>
                <tr>
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
            <button onClick={this.handleSearchNomInstallation}>Nom</button>

        </div>
    }



    render(){
        return(
            <div>
            <Link to={'/rechercheVille'}>Recherche par Ville</Link>
            <Link to={'/rechercheCodePostal'}>Recherche par code Postal</Link>
            <Link to={'/rechercheParNomInstallation'}>Recherche par nom d'installation</Link>
            </div>
                );

    };
}

