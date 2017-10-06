import React, { Component } from "react";
import { css, cssFor } from "glamor";

class SmallCardPost extends Component {
  render() {
    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          padding: "10px"
        })}
      >
        <div
          className={css({
            height: "240px",
            width: "370px",
            opacity: "0.1",
            backgroundColor: "black"
          })}
        />

        <p>REACT</p>
        <p>Influencing The Influencer</p>
        <p>Space The Final Frontier</p>

        <div
          className={css({
            display: "flex",
            flexDirection: "row"
          })}
        >
          <div
            className={css({
              height: "40px",
              width: "40px",
              border: "1px solid #D8D8D8",
              backgroundColor: "#D8D8D8",
              borderRadius: "32px",
              marginRight: "10px"
            })}
          />

          <div
            className={css({
              display: "flex",
              flexDirection: "column"
            })}
          >
            <p>Walter Parker</p>
            <p>27 Jul 2017</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCardPost;
