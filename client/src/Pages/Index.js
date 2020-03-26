import React, { Component } from "react";
import InstallationDetails from "../components/InstallationDetails";
import Equipements from "../components/Equipements";
import Activites from "../components/Activites";
import "../css/Index.css";
import { Link } from "react-router-dom";

export class Index extends Component {
  render() {
    return (
      <div>
        <InstallationDetails />
        <div className="container-index">
          <Equipements />
          <Activites />
        </div>
        <Link to={"/"}>
          <button className="btn btn-primary">Retour</button>
        </Link>
      </div>
    );
  }
}

export default Index;
