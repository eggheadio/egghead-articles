import React, { Component } from "react";
import { css } from "glamor";
import glamorous from "glamorous";

const PaginatorLink = glamorous.a({
  textDecoration: "none",
  textDecorationColor: "black",
  marginRight: "10px",
  marginLeft: "10px",
  height: "60px",
  width: "60px",
  padding: "15px 20px 15px 20px",
  ":link": {
    color: "black"
  },
  ":visited": {
    color: "black"
  },
  ":hover":{
    backgroundColor: "#F5F5F5"
  }
});

const PaginatorUL = glamorous.div({
  textDecoration: "none"
});

const activeStyle = css({
  backgroundColor: "#F5F5F5 !important"
});

class Paginator extends Component {
  render() {
    return (
      <PaginatorUL>
        <button
          className={css({
            height: "60px",
            width: "60px",
            opacity: "0.2",
            backgroundColor: "#000000",
            border: "none"
          })}
        >
          {" "}
          ~~~{" "}
        </button>
        <PaginatorLink href="#" className={activeStyle}>
          1
        </PaginatorLink>
        <PaginatorLink href="#">2</PaginatorLink>
        <PaginatorLink href="#">3</PaginatorLink>
        . . .
        <PaginatorLink href="#">15</PaginatorLink>
        <button
          className={css({
            height: "60px",
            width: "60px",
            opacity: "0.4",
            backgroundColor: "#000000",
            border: "none"
          })}
        >
          {" "}
          ~~~{" "}
        </button>
      </PaginatorUL>
    );
  }
}

export default Paginator;
