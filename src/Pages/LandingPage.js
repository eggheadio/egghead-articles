import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";
import { withRouter, Link } from "react-router-dom";


import Header from "./../Components/Header";
import Paginator from "./../Components/Paginator";
import SmallCardPost from "./../Components/SmallCardPost";
import LargeCardPost from "./../Components/LargeCardPost";
import TextOnlyCardPost from "./../Components/TextOnlyCardPost";
import TopicsTabs from "./../Components/TopicsTabs";

const LandingPageObserver = observer(
  class LandingPage extends Component {
    navigateToArticle = id => {
      this.props.history.push("/article/" + id);
    };

    componentWillReact() {
    }

    componentWillMount() {
      this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
      this.setState({ width: window.innerWidth });
    };

    render() {
      const articles = this.props.store.articles;

      if (articles === undefined) {
        return <h1> Loading.... </h1>;
      }

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
          <section class="center"
            className={css({
              display: "flex",
              marginTop: "60px",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              paddingRight: "20px",
              paddingLeft: "20px",
              flexWrap: "wrap",
                       maxWidth: "1400px",
              alignContent: "stretch",
            })}
          >
     
            {articles.map((article, index) => {
              if (index === 3 && this.state.width > 1200) {
                return (
                  <div
                    key={article.articleId}
                    onClick={() => {
                      this.navigateToArticle(article.articleId);
                    }}
                  >
                    <LargeCardPost
                      article={article}
                      onClick={() => {
                        this.navigateToArticle(article.articleId);
                      }}
                    />
                  </div>
                );
              } else if (index >= 10) {
                return (
                  <div
                    key={article.articleId}
                    onClick={() => {
                      this.navigateToArticle(article.articleId);
                    }}
                  >
                    <TextOnlyCardPost article={article} />
                  </div>
                );
              } else {
                return (
                  <div
                    key={article.articleId}
                    onClick={() => {
                      this.navigateToArticle(article.articleId);
                    }}
                  >
                    <SmallCardPost
                      article={article}
                      onClick={() => {
                        this.navigateToArticle(article.articleId);
                      }}
                    />
                  </div>
                );
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

export default withRouter(LandingPageObserver);
