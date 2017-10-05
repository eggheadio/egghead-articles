import React, { Component } from "react";
import { css } from "glamor";

class Header extends Component {
  render() {
    return (
      <div
        className={css({
          height: "430px",
          backgroundColor: "gray",
          paddingRight: "180px",
          paddingLeft: "180px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        })}
      >
        <h1>Making Programmers Badass</h1>
        <h3>The Official Egghead.io Knowledge Hub</h3>
        <input
          type="text"
          className={css({
            height: "48px",
            width: " 460px",
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            paddingLeft: '48px'
          })}
          placeholder="Search posts, authors, courses,..."
        />
      </div>
    );
  }
}

export default Header;
