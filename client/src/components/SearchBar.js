import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCodePostal,
  getVille,
  selectByCode,
  selectByVille,
  fetchAllInstallation
} from "../store/actions";
import "../css/SearchBar.css";

export class SearchBar extends Component {
  componentWillMount() {
    this.props.getCodePostal();
    this.props.getVille();
  }

  render() {
    const ville = this.props.villes.map((commune, index) => (
      <option key={index} value={commune}>
        {commune}
      </option>
    ));

    const code = this.props.code_postal.map((code, index) => (
      <option key={index} value={code}>
        {code}
      </option>
    ));

    return (
      <div>
        <form className="search-form">
          <label htmlFor={"Ville"}>Ville : </label>
          <select
            className="custom-select col-sm-2"
            id={"Ville"}
            onChange={e => this.props.selectByVille(e.target.value)}
          >
            {ville}
          </select>
          <label htmlFor={"code_postal"}>Code Postal : </label>
          <select
            className="custom-select col-sm-2"
            id={"code_postal"}
            onChange={e => this.props.selectByCode(e.target.value)}
          >
            {code}
          </select>
          <button
            className="btn btn-secondary"
            onClick={e => this.props.fetchAllInstallation()}
          >
            Reset
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  code_postal: state.fetch.code_postaux,
  villes: state.fetch.villes
});

export default connect(mapStateToProps, {
  getCodePostal,
  selectByCode,
  fetchAllInstallation,
  selectByVille,
  getVille
})(SearchBar);
