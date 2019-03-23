import React from "react";
import Client from "../Client";
import {Link} from "react-router-dom";


class Installation extends React.Component{
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



/*Partie rendu html */
    updateInputValue(evt){
        this.setState({
            inputValue : evt.target.value
        });
    }

    render(){
        const foodRows = this.state.installations.map((installation,i)=>(
            <tr>
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return(

            <div>
                <ul>
                    <li><Link to={'/rechercheVille'}>Recherche par Ville</Link></li>
                    <li><Link to={'/rechercheCodePostal'}>Recherche par code Postal</Link></li>
                    <li><Link to={'/rechecheTypeActivite'}>Recheche par Type d'activité</Link></li>
                    <li><Link to={'/rechercheParNomInstallation'}>Recherche par nom d'installation</Link></li>

                </ul>
                <div>
                    <button onClick={this.handleSearchAll}>Chercher</button>
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
            </div>

                );

    };
}

export default Installation
