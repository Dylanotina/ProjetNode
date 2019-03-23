import React from 'react';
import   {Link} from 'react-router-dom';
import './css/style.css'


 class Home extends React.Component{

    render() {
        return(
            <div>
                <h1>Page d'Accueil </h1>
                <ul>
                    <li><Link to="/installation">Liste de toutes les Installations</Link></li>
                    <li><Link to={'/rechercheVille'}>Recherche par Ville</Link></li>
                    <li><Link to={'/rechercheCodePostal'}>Recherche par Code Postal</Link></li>
                    <li><Link to={'/rechecheTypeActivite'}>Recherche par Type d'Activité</Link></li>
                    <li><Link to={'/rechercheParNomInstallation'}>Recherche par Nom d'Installation</Link></li>
                </ul>
                </div>
        );
    }
}
export default Home