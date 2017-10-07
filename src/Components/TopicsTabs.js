import React, { Component } from "react";
import { css } from "glamor";
import glamorous from "glamorous";

const TabLink = glamorous.a({
  textDecoration: "none",
  textDecorationColor: "black",
  marginRight: "10px",
  marginLeft: "10px",
  padding: "16px 8px",
  fontSize: "22px",
  lineHeight: "26px",
  opacity: "0.5"
});

const TabList = glamorous.div({
  display: "flex",
  flexDirection: "row"
});

const activeStyle = css({
  borderBottom: "2px solid black",
  opacity: "1"
});

class Paginator extends Component {
  render() {
    return (
      <div>
        <TabList>
          <TabLink className={activeStyle}> All 233 </TabLink>
          <TabLink> Typescript 33 </TabLink>
          <TabLink> React 33 </TabLink>
          <TabLink> Android 33 </TabLink>
          <TabLink> iOS 33 </TabLink>
          <TabLink> D3 33 </TabLink>
          <TabLink> Postgress 33 </TabLink>
          <TabLink
            className={css({
              textDecoration: "underline",
              fontSize: "16px"
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
