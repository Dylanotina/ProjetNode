import React from "react";
import SearchBar from "../components/SearchBar";
import Installation from "../components/Installation";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Page d'Accueil</h1>
        <SearchBar />
        <Installation />
      </div>
    );
  }
}
export default Home;
