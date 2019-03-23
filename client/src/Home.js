import React from 'react';
import   {Link} from 'react-router-dom';
import './css/style.css'


 class Home extends React.Component{

    render() {
        return(
            <div>
                <h1>Page d'Accueil </h1>
                <ul>
                    <li><Link to="/installation">Liste des Installations</Link></li>
                    <li><Link to={'/rechercheVille'}>Recherche par Ville</Link></li>
                    <li><Link to={'/rechercheCodePostal'}>Recherche par code Postal</Link></li>
                    <li><Link to={'/rechecheTypeActivite'}>Recheche par Type d'activité</Link></li>
                    <li><Link to={'/rechercheParNomInstallation'}>Recherche par nom d'installation</Link></li>
                </ul>
                </div>
        );
    }
}
export default Home