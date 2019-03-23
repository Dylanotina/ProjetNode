import React from "react";
import Client from "../Client";



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
            <tr>
                <td key={i}>{installation.noDeLInstallation}</td>
                <td key={i}>{installation.nomUsuelDeLInstallation}</td>
                <td key={i}>{installation.codePostal}</td>
                <td key={i}>{installation.nomDeLaCommune}</td>
            </tr>
        ));
        return(
            <div>
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

    };
}

export default Installation
