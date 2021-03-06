import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivitesByCode } from "../store/actions";

export class Activites extends Component {
  componentWillMount() {
    console.log(this.props.code_equipement);
    if (this.props.code_equipement !== "") {
      this.props.fetchActivitesByCode(this.props.code_equipement);
    }
    //
  }

  componentDidUpdate() {
    //console.log(this.props.code_equipement);
    if (
      this.props.code_equipement !== "" &&
      this.props.activiteChargee === false
    ) {
      this.props.fetchActivitesByCode(this.props.code_equipement);
    }
  }

  render() {
    if (this.props.activites === undefined) {
      return null;
    } else {
      const Activites = this.props.activites.map((activite, index) => (
        <p key={index}>{activite.activiteLibelle}</p>
      ));
      return (
        <div>
          <h3>Activités possibles sur cet equipement :</h3>
          <div>{Activites}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  activites: state.fetch.activites,
  code_equipement: state.fetch.code_equipement,
  activiteChargee: state.fetch.activiteChargee
});

export default connect(mapStateToProps, { fetchActivitesByCode })(Activites);
