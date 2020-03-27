import React, { Component } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { fetchAllInstallation } from "../store/actions";

export class Carte extends Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.containerMap,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-1.8158, 47.278],
      zoom: 7
    });

    //console.log(this.props.installations);

    const locations = [];
    for (let installation of this.props.installations) {
      if (installation.localisation !== "") {
        let tabLongLat = installation.localisation.split(",");
        locations.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [parseFloat(tabLongLat[1]), parseFloat(tabLongLat[0])]
          }
        });
      }
    }

    map.on("load", () => {
      map.addSource("point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: locations
        }
      });
      map.loadImage(
        "https://img.icons8.com/metro/52/000000/marker.png",
        (error, image) => {
          if (error) throw error;
          map.addImage("map-marker", image);
        }
      );
      map.addLayer({
        id: "points",
        type: "symbol",
        source: "point",
        layout: {
          "icon-image": "map-marker",
          "icon-size": 0.25
        }
      });
    });
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
  installations: state.fetch.installations,
  dataChange: state.fetch.dataChange
});
export default connect(mapStateToProps, { fetchAllInstallation })(Carte);
