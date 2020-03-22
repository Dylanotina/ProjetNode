import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInstallationByCodeInstallation } from "../store/actions/index";

export class InstallationDetails extends Component {
  componentWillMount() {
    this.props.fetchInstallationByCodeInstallation(
      this.props.code_installation
    );
  }

  render() {
    const Installation = this.props.installation.map(installation => (
      <div key={1}>
        <h1>{installation.nomUsuelDeLInstallation}</h1>
        <p>Code postal:{installation.codePostal}</p>
        <p>Departement:{installation.departement}</p>
        <p>Nom de la commune:{installation.nomDeLaCommune}</p>
        <p>Adresse:{installation.nomVoie}</p>
        <div>
          Desserte:
          <ul>
            <li>Bus :{installation.desserteBus}</li>
            <li>Train : {installation.desserteTrain}</li>
            <li>Metro : {installation.desserteMetro}</li>
          </ul>
        </div>
      </div>
    ));

    return <div>{Installation}</div>;
  }
}

const mapStateToProps = state => ({
  installation: state.fetch.installation,
  code_installation: state.fetch.code_installation
});

export default connect(mapStateToProps, {
  fetchInstallationByCodeInstallation
})(InstallationDetails);
