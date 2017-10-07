import React, { Component } from "react";
// Import routing components
import { Route } from "react-router";
// Import pages
import LandingPage from "./Pages/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
