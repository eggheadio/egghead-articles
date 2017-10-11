import React, { Component } from "react";
import { css } from "glamor";

class ArticleHeader extends Component {
  render() {
    return (
      <div
        className={css({
          height: "430px",
          backgroundColor: "gray",
          paddingTop: "32px",
          paddingRight: "180px",
          paddingLeft: "180px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between"
          })}
        >
          <img
            src="https://avatars2.githubusercontent.com/u/5975001?v=4&s=200"
            alt="logo"
            className={css({
              height: "52px",
              width: "52px"
            })}
          />

          <button
            className={css({
              height: "52px",
              width: "52px",
              backgroundColor: "transparent",
              border: "1px solid #FFFFFF",
              color: "white",
              borderRadius: "32px",
              borderColor: "#aaa"
            })}
          >
          search
          </button>

          <button
            className={css({
              height: "40px",
              width: "140px",
              backgroundColor: "transparent",
              border: "1px solid #FFFFFF",
              color: "white"
            })}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    );
  }
}

export default ArticleHeader;
