import React from "react";
import Client from "../Client";
import {Link} from "react-router-dom";
import "../css/installations.css"

class Installation extends React.Component{
    state = {
        installations : [],
        inputValue : null
    };

    componentDidMount() {
        this.handleSearchAll();
    }

    handleSearchAll = ()=>{
       Client.searchAllInstallation(installations =>{
           this.setState({
               installations : installations.slice(0,100)
           });
       });
   };



/*Partie rendu html */


    render(){
        const foodRows = this.state.installations.map((installation,i)=>(
            <tr class="table-dark">
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return(
            <div>
                <h2>Liste des installations</h2>
                    <Link to={'/'}><button class="btn btn-secondary">Accueil </button></Link>
                <br/><br/>
                <table class="table table-hover">
                        <thead>
                        <tr class="table-warning">
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

    };
}

export default Installation
