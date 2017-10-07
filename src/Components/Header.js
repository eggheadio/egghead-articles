import React, { Component } from "react";
import { css } from "glamor";

class Header extends Component {
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

        <p
          className={css({
            fontSize: "3em",
            fontWeight: "500",
            lineHeight: "53px",
            marginTop: "54px"
          })}
        >
          Making Programmers Badass
        </p>

        <p
          className={css({
            opacity: "0.6",
            color: "#FFFFFF",
            fontSize: "1.5em",
            lineHeight: "32px",
            marginTop: "20px"
          })}
        >
          The Official Egghead.io Knowledge Hub
        </p>
        <input
          type="text"
          className={css({
            height: "48px",
            width: " 460px",
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            paddingLeft: "48px",
            marginTop: "40px",
            fontSize: "15px"
          })}
          placeholder="Search posts, authors, courses,..."
        />
      </div>
    );
  }
}

export default Header;
