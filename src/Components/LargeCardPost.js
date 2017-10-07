import React, { Component } from "react";
import { css } from "glamor";

class LargeCardPost extends Component {
  render() {
    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          margin: "10px",
          // ":hover": {
          //   backgroundColor: "white",
          //   boxShadow: "0px 0px 20px skyblue",
          //   border: "1px solid skyblue",
          //   transform: "scale(1.05, 1.05)",
          //   zIndex: "2",
          //   transition: "0.2s ease-out"
          // }
        })}
      >
        <div
          className={css({
            width: "760px",
            height: "500px",
            opacity: "0.1",
            backgroundColor: "black",
            marginLeft: "10px"
          })}
        />

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            marginLeft: "32px",
            marginTop: "24px",
            width: "370px"
          })}
        >
          <p
            className={css({
              marginTop: "24px",
              fontWeight: "bold",
              letterSpacing: "3px",
              lineHeight: "24px",
              opacity: "0.5"
            })}
          >
            REACT
          </p>
          <p
            className={css({
              fontSize: "2em"
            })}
          >
            Influencing The Influencer
          </p>
          <p
            className={css({
              fontWeight: "thin",
              opacity: "0.5",
              height: "290px",
              textAlign: "justify",
              marginTop: "10px"
            })}
          >
            Audio player software is used to play back sound recordings in one
            of the many formats available for computers today. It can also play
            back music CDs. There is audio player software that is native to the
            computer’s operating system (Windows, Macintosh, and Linux) and
            there are web-based audio players. This article discusses the local
            computer audio players.
          </p>

          <div
            className={css({
              marginTop: "32px",
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
      </div>
    );
  }
}

export default LargeCardPost;
