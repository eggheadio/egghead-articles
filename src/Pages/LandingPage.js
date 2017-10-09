import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";

import Header from "./../Components/Header";
import Paginator from "./../Components/Paginator";
import SmallCardPost from "./../Components/SmallCardPost";
import LargeCardPost from "./../Components/LargeCardPost";
import TextOnlyCardPost from "./../Components/TextOnlyCardPost";
import TopicsTabs from "./../Components/TopicsTabs";

const LandingPageObserver = observer(
  class LandingPage extends Component {
    componentWillReact() {
      console.log("I will re-render, since the observables changed!");
    }

    render() {
      const articles = this.props.store;
      console.log(articles);

      return (
        <div
          className={css({
            marginBottom: "64px"
          })}
        >
          <Header />
          <nav
            className={css({
              display: "flex",
              marginTop: "60px",
              justifyContent: "space-around"
            })}
          >
            <TopicsTabs />
          </nav>
          <section
            className={css({
              display: "flex",
              marginTop: "60px",
              justifyContent: "center",
              paddingRight: "20px",
              paddingLeft: "20px",
              flexWrap: "wrap",
              alignContent: "stretch"
            })}
          >
            {articles.map((article, index) => {
              if (index === 3) {
                return <LargeCardPost article={article} />;
              } else if (index >= 10) {
                return <TextOnlyCardPost article={article} />;
              } else {
                return <SmallCardPost article={article} />;
              }
            })}
          </section>

          <section
            className={css({
              marginTop: "110px",
              display: "flex",
              justifyContent: "center"
            })}
          >
            <Paginator />
          </section>
        </div>
      );
    }
  }
);

export default LandingPageObserver;
