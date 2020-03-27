import React from "react";
import SearchBar from "../components/SearchBar";
import Installation from "../components/Installation";
import Carte from "../components/Carte";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Installations Sportives en Loire-Atlantique</h1>
        <SearchBar />
        <div className="container">
          <Installation />
          <Carte />
        </div>
      </div>
    );
  }
}
export default Home;
