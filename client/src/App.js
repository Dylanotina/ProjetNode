import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import store from "./store";
import Index from "./Pages/Index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/installation/:id" component={Index} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
