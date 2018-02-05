import React, { Component } from "react";
import { css } from "glamor";
import glamorous from "glamorous";
import { topicTitle } from "./../Styles/TextStyles";

const TabLink = glamorous.a({
  color: "#2B2B2B",
  marginRight: "10px",
  marginLeft: "10px",
  padding: "20px 15px",
  fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica neue, helvetica, roboto, noto, arial, sans-serif",
  fontSize: "16px",
  lineHeight: "20px",
  borderRadius: "5px",
  border: "2px solid #F5F5F5",
  transition: "all 0.2s ease-in-out",
  ":hover": {
            backgroundColor: "#F5F5F5",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out"
          }
});

const TabList = glamorous.div({
  display: "flex",
  flexDirection: "row"
});

const activeStyle = css({
  backgroundColor: "#F5F5F5",
});

const articleAmount = css({
    opacity: "0.4"
});

class Paginator extends Component {
  render() {
    return (
      <div>
        <TabList>
          <TabLink className={activeStyle}> All <span className={articleAmount}>233</span> </TabLink>
          <TabLink> Typescript <span className={articleAmount}>33</span> </TabLink>
          <TabLink> React <span className={articleAmount}>15</span> </TabLink>
          <TabLink> Android <span className={articleAmount}>20</span> </TabLink>
          <TabLink> iOS <span className={articleAmount}>3</span> </TabLink>
          <TabLink> D3 <span className={articleAmount}>8</span> </TabLink>
          <TabLink> Postgress <span className={articleAmount}>13</span> </TabLink>
          <TabLink
            className={css({
              /*textDecoration: "underline",
              fontSize: "16px"*/
            })}
          >
            {" "}
            Show more{" "}
          </TabLink>
        </TabList>
      </div>
    );
  }
}

export default Paginator;
