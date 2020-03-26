import React, { Component } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";

export class Carte extends Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.containerMap,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0.33, 47.7633],
      zoom: 6
    });

    map.on("load", () => {});
  }
  render() {
    const mapStyle = {
      width: "100vh",
      height: "82vh",
      paddingLeft: "3vh",
      borderRadius: "10px"
    };
    return <div ref={el => (this.containerMap = el)} style={mapStyle}></div>;
  }
}
const mapStateToProps = state => ({
  installations: state.fetch.installations
});
export default connect(mapStateToProps)(Carte);
