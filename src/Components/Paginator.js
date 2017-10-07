import React, { Component } from "react";
import { css } from "glamor";
import glamorous from "glamorous";

const PaginatorLink = glamorous.a({
  textDecoration: "none",
  textDecorationColor: "black",
  marginRight: "10px",
  marginLeft: "10px",
  padding: "5px 10px 5px 10px",
  height: "32px",
  width: "32px",
  ":link": {
    color: "black"
  },
  ":visited": {
    color: "black"
  },
  ":hover":{
    border: "1px solid lightgray"
  }
});

const PaginatorUL = glamorous.div({
  textDecoration: "none"
});

const activeStyle = css({
  border: "1px solid black !important"
});

class Paginator extends Component {
  render() {
    return (
      <PaginatorUL>
        <button
          className={css({
            height: "32px",
            width: "48px",
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
            height: "32px",
            width: "48px",
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
