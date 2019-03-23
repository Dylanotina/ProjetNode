import React from "react";
import Client from "../Client";


class Installation_RechercheActivite extends React.Component{
    state ={
        installations :[],
        activites :[],
        inputValue : null
    }
    componentDidMount() {
        this.RecuperationLibelles();
    }

    RecuperationLibelles =()=>{
        Client.RecupererLesLibelles(cb=>{
            this.setState({
                activites : cb.slice(0,200)
            });
        });
    };

    handleSearchActivite=()=>{
        Client.searchTypeActivite(this.state.inputValue,installations=>{
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
            <tr>
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        const listAct = this.state.activites.map((activite,i)=>(
            <option key={i}>{activite.activiteLibelle}</option>
        ))
        return (<div id="tableau-installation">
                <select onChange={evt => this.updateInputValue(evt)}>
                    {listAct}
                </select>
                <button onClick={this.handleSearchActivite}>Chercher</button>
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

}
export default Installation_RechercheActivite