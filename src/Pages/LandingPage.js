import React, { Component } from "react";
import { css } from "glamor";
import Header from "./../Components/Header";
import Paginator from "./../Components/Paginator";
import SmallCardPost from "./../Components/SmallCardPost";
import LargeCardPost from "./../Components/LargeCardPost";
import TopicsTabs from "./../Components/TopicsTabs";

class LandingPage extends Component {
  render() {
    return (
      <div
        className={css({
          marginBottom: "64px"
        })}
      >
        <Header />
        <nav
          className={css({
            display: "flex",
            marginTop: "60px",
            justifyContent: "space-around"
          })}
        >
          <TopicsTabs />
        </nav>
        <section
          className={css({
            display: "flex",
            marginTop: "60px",
            justifyContent: "center",
            paddingRight: "20px",
            paddingLeft: "20px",
            flexWrap: "wrap",
            alignContent: "stretch"
          })}
        >
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <LargeCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
          <SmallCardPost />
        </section>

        <section
          className={css({
            marginTop: "110px",
            display: "flex",
            justifyContent: "center"
          })}
        >
          <Paginator />
        </section>
      </div>
    );
  }
}

export default LandingPage;
