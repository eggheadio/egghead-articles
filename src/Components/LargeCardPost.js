import React, { Component } from "react";
import { css } from "glamor";
import { categoryTextStyle } from "./../Styles/TextStyles";

class LargeCardPost extends Component {
  truncate = (data, max_letters) => {
    if (data.length > max_letters) {
      return data.slice(0, max_letters) + "...";
    } else {
      return data;
    }
  };

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
          flexDirection: "row",
          padding: "10px",
          ":hover": {
            boxShadow: "0px 0px 2px lightgray",
            cursor: "pointer"
          }
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
            className={categoryTextStyle}
          >
            {category.toUpperCase()}
          </p>
          <p
            className={css({
              fontSize: "2em"
            })}
          >
            {content.title}
          </p>

          <p
            className={css({
              fontWeight: "thin",
              opacity: "0.5",
              height: "290px",
              textAlign: "justify",
              marginTop: "10px",
              lineHeight: "24px"
            })}
          >
            {this.truncate(content.body, 500)}
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
      </div>
    );
  }
}

export default LargeCardPost;
