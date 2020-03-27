import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEquipementByCode,
  setCodeEquipement
} from "../store/actions/index";
import "../css/Equipement.css";

export class Equipements extends Component {
  componentWillMount() {
    this.props.fetchEquipementByCode(this.props.code_installation);
  }

  render() {
    const Equipement = this.props.equipements.map((equipement, index) => (
      <p
        key={index}
        onClick={e =>
          this.props.setCodeEquipement(equipement.numeroDeLaFicheEquipement)
        }
      >
        {equipement.equipement}
      </p>
    ));
    return (
      <div>
        <h3>Equipements disponibles sur le site :</h3>
        <div className="equipements">{Equipement}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  equipements: state.fetch.equipements,
  code_installation: state.fetch.code_installation
});

export default connect(mapStateToProps, {
  fetchEquipementByCode,
  setCodeEquipement
})(Equipements);
