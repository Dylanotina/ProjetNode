import React, { Component } from "react";
import { connect } from "react-redux";
import { getCodePostal, selectByCode } from "../store/actions";

export class SearchBar extends Component {
  componentWillMount() {
    this.props.getCodePostal();
  }

  render() {
    const code = this.props.code_postal.map((code, index) => (
      <option key={index} value={code}>
        {code}
      </option>
    ));
    return (
      <div>
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">
            Rechercher
          </button>
          <label htmlFor={"code_postal"}>Code Postal :</label>
          <select
            className="custom-select col-sm-2"
            id={"code_postal"}
            onChange={e => this.props.selectByCode(e.target.value)}
          >
            {code}
          </select>
          <button className="btn btn-secondary">Reset</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  code_postal: state.fetch.code_postaux
});

export default connect(mapStateToProps, {
  getCodePostal,
  selectByCode
})(SearchBar);
