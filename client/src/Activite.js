import React from "react";
import Client from "./Client";

class Activite extends React.Component{
    state = {
        activites : []
};
    handleSearch = ()=>{
        Client.searchAllActivite(activites=>{
            this.setState({
                activites : activites.slice(0,100)
                }
            );
        });
    };
    render() {
        const foodRows = this.state.activites.map((activite,i)=>(
            <tr>
                <td key={i}>{activite.activiteCode}</td>
                <td key={i}>{activite.activiteLibelle}</td>
                <td key={i}>{activite.equipement}</td>
            </tr>
        ));
        return(
            <div id="tableau-activites">
                <table>
                    <thead>
                    <tr>
                        <th>Code de l'activite</th>
                        <th>Libellé de l'activite</th>
                        <th>Equipement</th>
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
export default Activite