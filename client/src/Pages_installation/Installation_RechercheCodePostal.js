import React from "react";
import Client from "../Client";
import Table from "react-bootstrap/Table"
import {Link} from "react-router-dom";

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
            <tr>
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return <div id="tableau-installation">
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            Code Postal :<input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
            <button style={buttonStyle}  onClick={this.handleSearchCodePostal}>Code Postal</button>
            <Table striped bordered hover>
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
            </Table>


        </div>

    }
}
export default Installation_RechercheCodePostal