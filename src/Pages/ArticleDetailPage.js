import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";

import ReactMarkdown from "react-markdown";
import ArticleHeader from "./../Components/ArticleHeader";
import SmallCardPost from "./../Components/SmallCardPost";

const ArticlePageObserver = observer(
  class ArticlePageObserver extends Component {
    componentWillReact() {
      console.log("I will re-render, since the observables changed!");
    }

    render() {
      const article = this.props.store;
      const { body } = article.content;

      return (
        <div
          className={css({
            marginBottom: "64px"
          })}
        >
          <ArticleHeader />

          <div
            className={css({
              marginTop: "72px",
              marginLeft: "72px",
              marginRight: "72px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            })}
          >
            <ReactMarkdown
              className={css({
                width: "600px"
              })}
              source={body}
            />
          </div>

          <div
            className={css({
              marginTop: "72px",
              height: "300px",
              backgroundColor: "#eee"
            })}
          >
            .
          </div>

          <div
            className={css({
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            })}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "72px",
                marginRight: "72px"
              })}
            >
              <h1>More posts tagged React</h1>
              <h3>MORE -></h3>
            </div>

            <div
              className={css({
                display: "flex",
                justifyContent: "center"
              })}
            >
              <SmallCardPost article={article} />
              <SmallCardPost article={article} />
              <SmallCardPost article={article} />
            </div>
          </div>
        </div>
      );
    }
  }
);

export default ArticlePageObserver;
