import React from "react";
import Client from "../Client";

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
}
export default Installation_RechercheNom
