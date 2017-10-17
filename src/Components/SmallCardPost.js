import React, { Component } from "react";
import { css } from "glamor";

import { categoryTextStyle } from "./../Styles/TextStyles";

class SmallCardPost extends Component {
  render() {
    const {
      content,
      images,
      author,
      category,
      publishedAt,
      formattedPublishedDate
    } = this.props.article;

    return (
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          width: "370px",
          ":hover": {
            boxShadow: "0px 0px 2px lightgray",
            cursor: "pointer"
          }
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

        <p className={categoryTextStyle}>{category.toUpperCase()}</p>
        <p
          className={css({
            fontSize: "1.5em"
          })}
        >
          {content.title}
        </p>
        <p
          className={css({
            height: "58px",
            marginTop: "7px",
            fontWeight: "thin",
            opacity: "0.5"
          })}
        >
          {content.subtitle}
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginTop: "20px"
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
              flexDirection: "column",
              alignSelf: "center",
              marginLeft: "12px"
            })}
          >
            <p
              className={css({
                fontSize: "14px",
                lineHeight: "20px"
              })}
            >
              {author}
            </p>
            <p
              className={css({
                fontSize: "12px",
                lineHeight: "20px",
                opacity: "0.4"
              })}
            >
              {formattedPublishedDate}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallCardPost;
