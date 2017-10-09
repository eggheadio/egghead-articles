import React, { Component } from "react";
import { Route } from "react-router";
import LandingPage from "./Pages/LandingPage";
import Store from "./Stores/ArticelsStore";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return <LandingPage store={Store.articles} />;
          }}
        />
      </div>
    );
  }
}

export default App;
