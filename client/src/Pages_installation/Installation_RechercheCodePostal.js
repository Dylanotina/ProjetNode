import React from "react";
import Client from "../Client";
import {Link} from "react-router-dom";
import "../css/codePostal.css";
import './../css/bootstrap1.min.css';

class Installation_RechercheCodePostal extends React.Component{
    state ={
        installations :[],
        inputValue : null
    }
    handleSearchCodePostal =()=>{
        Client.searchCodePostal(this.state.inputValue,installations=>{
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
        const  buttonStyle ={
            margin:'25px',
            textAlign : 'center'
        };
        const foodRows = this.state.installations.map((installation,i)=>(
            <tr class="table-dark">
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return <div id="tableau-installation">
            <h2>Recherche par Code Postal</h2>

            <Link to={'/'}><button class="btn btn-secondary">Accueil</button></Link>
            <br/><br/>
            <label>Code Postal : </label><input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
            <button style={buttonStyle}  onClick={this.handleSearchCodePostal} class="chercher">Charger</button>
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

    }
}
export default Installation_RechercheCodePostal