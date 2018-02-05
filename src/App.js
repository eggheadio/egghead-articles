import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, observer } from "mobx-react";

import ScrollToTop from "./Components/ScrollToTop";
import LandingPage from "./Pages/LandingPage";
import ArticleDetailPage from "./Pages/ArticleDetailPage";
import PricingPage from "./Pages/PricingPage";

import Store from "./Stores/ArticleStore";
import { loadArticles } from "./Services/ArticleService";

const App = observer(
  class AppComponent extends Component {
    componentWillMount() {
      loadArticles().then(articles => {
        Store.setArticles(articles);
      });
    }

    render() {
      const routerProps = this.routerProps;

      return (
        <Router
          onUpdate={() => {
            window.scrollTo(0, 0);
          }}
        >
          <ScrollToTop>
            <div>
              <Route exact path="/">
                <LandingPage store={Store} {...routerProps} />
              </Route>
              <Route
                exact
                path="/article/:id"
                render={(props, article) => {
                  return <ArticleDetailPage store={Store} {...props} />;
                }}
              />
              <Route exact path="/pricing">
                <PricingPage />
              </Route>

            </div>
          </ScrollToTop>
        </Router>
      );
    }
  }
);

export default App;
