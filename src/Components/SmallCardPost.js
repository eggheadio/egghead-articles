import React, { Component } from "react";
import { css } from "glamor";
import { tachyons } from "tachyons-egghead";

import { categoryTextStyle } from "./../Styles/TextStyles";
import { articleTitle } from "./../Styles/TextStyles";
import { articleSubtitle } from "./../Styles/TextStyles";
import { authorName } from "./../Styles/TextStyles";
import { publishedDate } from "./../Styles/TextStyles";


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
          margin: "20px",
          width: "360px",
          ":hover": {
            cursor: "pointer"
          }
        })}
      >
        <div
          className={css({
            height: "240px",
            width: "360px",
            background: "url(https://d1ax1i5f2y3x71.cloudfront.net/items/0h431L1m1g0H3w2B1R1E/article-thumbnail-placeholder@2x.png) 50% 50% no-repeat white",
            backgroundSize: "360px",
            borderRadius: "5px",
            transition: "all 0.2s ease-in-out",
            ":hover": {
            backgroundSize:"105%",
            transition: "all 0.2s ease-in-out"
          }
          })}
        />
        
        <div
         className={css({
            padding: "0 20px 0 20px"
        })}
        >
            
                     
        <p className={categoryTextStyle}>{category.toUpperCase()}</p>
        <h3  
          className={articleTitle}>
          {content.title}
        </h3>
        <p
          className={articleSubtitle}>
          {content.subtitle}
        </p>

        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            marginTop: "40px",
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
              alignSelf: "center"
            })}
            >
            <p
              className={authorName}>
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

export default SmallCardPost;
