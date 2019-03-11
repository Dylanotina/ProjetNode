import React from 'react';
import  {Route, IndexRoute} from "react-router";
import App from './App'
import Activite from './Activite'
import Equipement from './Equipement'
import Home from './Home'

export default (
  <Route path='/' component={App}>
  <Route path='activite' component={Activite}/>
  <Route path='equipement' component={Equipement}/>
  <Route path='*' component={Home}/>
  </Route>
);
