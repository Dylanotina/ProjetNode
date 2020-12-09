import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchAllInstallation,
  setCodeInstallation
} from "../store/actions/index";
//import "../css/Installations.css";

class Installation extends React.Component {
  componentWillMount() {
    this.props.fetchAllInstallation();
  }

  /*Partie rendu html */

  render() {
    const TableStyle = {
      height: "82vh",
      width: "100vh",
      overflow: "auto"
    };

    const InstallationsRows = this.props.installations.map(
      (installation, i) => (
        <tr
          className="table-dark"
          key={i}
          onClick={e =>
            this.props.setCodeInstallation(installation.noDeLInstallation)
          }
        >
          <td>
            <Link to={`/installation/${installation.noDeLInstallation}`}>
              {installation.nomUsuelDeLInstallation}
            </Link>
          </td>
          <td>{installation.codePostal}</td>
          <td>{installation.nomDeLaCommune}</td>
        </tr>
      )
    );
    return (
      <div style={TableStyle} className="tableau">
        <table className="table table-hover">
          <thead>
            <tr className="thead-dark table-bordered">
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
  connect(mapStateToProps, { fetchAllInstallation, setCodeInstallation })(
    Installation
  )
);
