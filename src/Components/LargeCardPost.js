import React, { Component } from "react";
import { css } from "glamor";
import { categoryTextStyle } from "./../Styles/TextStyles";
import { articleTitle } from "./../Styles/TextStyles";
import { articleSubtitle } from "./../Styles/TextStyles";
import { authorName } from "./../Styles/TextStyles";
import { publishedDate } from "./../Styles/TextStyles";

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
          margin: "30px",        
            ":hover": {
            cursor: "pointer"
            }
        })}
      >
        <div
          className={css({
            width: "760px",
            height: "480px",
            borderRadius: "5px",
            background: "url(https://d1ax1i5f2y3x71.cloudfront.net/items/0r3U0r2o0B440134371f/largeThumbnail.png?X-CloudApp-Visitor-Id=2697228&v=e8e7dac0) 50% 50% no-repeat white",
            backgroundSize: "760px",
            borderRadius: "5px",
            transition: "all 0.2s ease-in-out",
              ":hover": {
              backgroundSize: "105%",
              transition: "all 0.2s ease-in-out",
              }
          })}
        />

        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            marginLeft: "40px",
            width: "370px"
          })}
        >
          <p
            className={categoryTextStyle}
          >
            {category.toUpperCase()}
          </p>
          <h3
            className={articleTitle}
          >
            {content.title}
          </h3>

          <p
            className={articleSubtitle}
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
                background: "url(https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/142/original/225933_5138711211_6220_n.jpg) 50% 50% no-repeat gray",
                backgroundSize: "40px",
                borderRadius: "20px",
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
                className={authorName}
              >
                {author}
              </p>
              <p
                className={publishedDate}
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
