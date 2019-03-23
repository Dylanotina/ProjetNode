import React from "react";
import Client from "./Client";

class Equipement extends React.Component{
    state = {
        equipements : []
    };
    handleSearch = ()=>{
        Client.searchAllEquipement(equipements=>{
            this.setState({
                    equipements : equipements.slice(0,100)
                }
            );
        });
    };
    render() {
        const foodRows = this.state.equipements.map((equipements,i)=>(
            <tr>
                <td key={i}>{equipements.numeroDeLaFicheEquipement}</td>
            </tr>
        ));
        return(
            <div id="tableau-activites">
                <table>
                    <thead>
                    <tr>
                        <th>Numéro de l'equipement</th>
                        <th>Installation</th>
                        <button onClick={this.handleSearch}>
                            Clique pour chercher
                        </button>
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

export default Equipement