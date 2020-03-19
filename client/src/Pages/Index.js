import React, { Component } from "react";
import InstallationDetails from "../components/InstallationDetails";
import Equipements from "../components/Equipements";
import Activites from "../components/Activites";
export class Index extends Component {
  render() {
    return (
      <div>
        <InstallationDetails />
        <Equipements />
        <Activites />
      </div>
    );
  }
}

export default Index;
