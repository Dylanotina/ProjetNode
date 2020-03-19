import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllInstallation } from "../store/actions/index";
import "../css/installations.css";

class Installation extends React.Component {
  // componentDidMount() {
  //   this.handleSearchAll();
  // }

  componentWillMount() {
    this.props.fetchAllInstallation();
  }

  /*Partie rendu html */

  render() {
    const InstallationsRows = this.props.installations.map(
      (installation, i) => (
        <tr className="table-dark" key={i}>
          <td>
            <Link to={`/installation/`}>{installation.noDeLInstallation}</Link>
          </td>
          <td>{installation.nomUsuelDeLInstallation}</td>
          <td>{installation.codePostal}</td>
          <td>{installation.nomDeLaCommune}</td>
        </tr>
      )
    );
    return (
      <div>
        <h2>Liste des installations</h2>
        <Link to={"/"}>
          <button className="btn btn-secondary">Accueil </button>
        </Link>
        <br />
        <br />
        <table className="table table-hover">
          <thead>
            <tr className="table-warning">
              <th>Numéro de l'installation</th>
              <th>Nom de l'installation</th>
              <th>Code Postal</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>{InstallationsRows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  installations: state.fetch.installations
});

export default withRouter(
  connect(mapStateToProps, { fetchAllInstallation })(Installation)
);
