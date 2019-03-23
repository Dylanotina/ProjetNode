import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import App from "./App";
import Activite from "./Activite";
import Equipement from "./Equipement";
import Installation from "./Pages_installation/Installation";
import Home from "./Home";
import Installation_RechercheActivite from "./Pages_installation/Installation_RechercheActivite"
import Installation_RechercheVille from "./Pages_installation/Installation_RechercheVille";
import Installation_RechercheCodePostal from "./Pages_installation/Installation_RechercheCodePostal";
import Installation_RechercheNom from "./Pages_installation/Installation_RechercheNom";



ReactDOM.render(<BrowserRouter>
        <Route path='/' component={App}>
            <Route path='/' exact component={Home}/>
            <Route path='/activite' component={Activite}/>
            <Route path='/equipement' component={Equipement}/>
            <Route path={'/installation'} component={Installation}/>
            <Route path={'/rechecheTypeActivite'} component={Installation_RechercheActivite}/>
            <Route path={'/rechercheVille'} component={Installation_RechercheVille}/>
            <Route path={'/rechercheCodePostal'} component={Installation_RechercheCodePostal}/>
            <Route path={'/rechercheParNomInstallation'} component={Installation_RechercheNom}/>
        </Route>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
