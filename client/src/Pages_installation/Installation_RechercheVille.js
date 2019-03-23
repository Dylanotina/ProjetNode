import React from "react";
import Client from "../Client";
import './../css/ville.css';
import './../css/bootstrap1.min.css'



class Installation_RechercheVille extends React.Component{
    state = {
        installations :[],
        inputValue : null
    }
    handleSearchVille =()=>{
        Client.searchVille(this.state.inputValue,installations=>{
            this.setState({
                installations :installations.slice(0,100)
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
        return (<div id="tableau-installation">

                <h2> Recherche par Ville </h2>
                <a href="http://localhost:3000/"><button class="btn btn-secondary"> Accueil </button></a>
                <br/>
                <br/>
                <label>Nom de la ville : </label><input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                <button class="chercher" onClick={this.handleSearchVille}> CHARGER</button>

                <br/>
                <br/>
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
    }
}
export default Installation_RechercheVille