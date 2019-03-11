import React from 'react';
import {BrowserRouter as Link} from 'react-router';


export default class Home extends React.Component{
    componentDidMount() {
        browser
    }

    render() {
        return(
            <div>
                This is the home page.
                <Link to="/installation">Liste des Installations</Link>
                <Link to="/activite">Liste des Activités</Link>
                <Link to="/equipement">Liste des Equipements</Link>
            </div>
        );
    }
}