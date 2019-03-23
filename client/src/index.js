import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import App from "./App";
import Activite from "./Activite";
import Equipement from "./Equipement";
import Installation from "./Installation";
import Home from "./Home";




ReactDOM.render(<BrowserRouter>
        <Route path='/' component={App}>
            <Route path='/' exact component={Home}/>
            <Route path='/activite' component={Activite}/>
            <Route path='/equipement' component={Equipement}/>
            <Route path={'/installation'} component={Installation}/>

        </Route>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
