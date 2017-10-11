import React, { Component } from "react";
import { Route } from "react-router";
import LandingPage from "./Pages/LandingPage";

import ArticleDetailPage from "./Pages/ArticleDetailPage";
import Store from "./Stores/ArticleStore";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return <ArticleDetailPage store={Store.articles[0]} />;
          }}
        />
      </div>
    );
  }
}

export default App;
