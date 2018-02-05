import React, { Component } from "react";
import { css } from "glamor";
import { observer } from "mobx-react";

import ReactMarkdown from "react-markdown";
import ArticleHeader from "./../Components/ArticleHeader";
import SmallCardPost from "./../Components/SmallCardPost"


import { categoryTextStyle } from "./../Styles/TextStyles";
import { articleBody } from "./../Styles/TextStyles";


const ArticleDetailPage = observer(
  class ArticleDetailPageCompoenet extends Component {
    navigateToHome = () => {
      this.props.history.push("/");
    };

    componentDidMount() {
    }

    render() {
      const id = this.props.match.params.id;
      const article = this.props.store.articles.find(
        article => article.articleId === id
      );

      if (article === undefined) {
        return <h1> loading... </h1>;
      }

      const { author, category } = article;
      const { body, title, subtitle } = article.content;

      let socialButtons = [];

      for (let i = 0; i < 4; i++) {
        socialButtons.push(
          <div
          key={i}
            className={css({
              width: "32px",
              height: "32px",
              opacity: "0.6",
              borderRadius: "16px",
              marginRight: "16px",
              backgroundColor: "#666"
            })}
          />
        );
      }

      return (
        <div
          className={css({
            marginBottom: "64px"
          })}
        >
          <ArticleHeader />

          {/* region: articel heading */}
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px"
            })}
          >
            <a
              className={css({
                fontSize: "16px",
                color: "#AAA",
                letterSpacing: "1px",
                marginLeft: "-140px",
                marginRight: "140px",
                display: "block",
                ":hover": {
                  cursor: "pointer"
                }
              })}
              onClick={() => {
                this.navigateToHome();
              }}
            >
              {"< BACK"}
            </a>
            <div
              className={css({
                width: "750px"
              })}
            >
              <p className={categoryTextStyle}> {category.toUpperCase()} </p>
              <p
                className={css({
                  fontSize: "44px",
                  color: "black"
                })}
              >
                {title}
              </p>

              <p
                className={css({
                  fontSize: "22px",
                  color: "#888"
                })}
              >
                {subtitle}
              </p>
            </div>
            <div> </div>
          </div>
          {/* endregion : article heading */}

          {/* //#region: markdown */}
          <div
            className={articleBody}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "250px"
              })}
            >
              <div
                className={css({
                  width: "104px",
                  height: "104px",
                  backgroundColor: "#666",
                  borderRadius: "52px"
                })}
              />
              <p
                className={css({
                  fontSize: "20px",
                  color: "#222",
                  marginTop: "8px"
                })}
              >
                {author}
              </p>
              <p
                className={css({
                  fontSize: "14px",
                  color: "#AAA",
                  width: "150px",
                  textAlign: "center"
                })}
              >
                Front-end developer at egghead.io
              </p>
            </div>
            <div
              className={css({
                width: "600px"
              })}
            >
              <ReactMarkdown source={body} />
            </div>
            <div
              className={css({
                width: "250px"
              })}
            >
              <p
                className={css({
                  fontSize: "18px"
                })}
              >
                Share this article
              </p>

              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "12px"
                })}
              >
                {socialButtons}
              </div>

              <p
                className={css({
                  marginTop: "32px",
                  fontSize: "18px"
                })}
              >
                Newsletter
              </p>
              <button
                className={css({
                  height: "40px",
                  width: "140px",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  color: "black",
                  marginTop: "12px"
                })}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          {/* //#endregion: markdown  */}
          {/* //#region: author details */}
          <div
            className={css({
              marginTop: "72px",
              height: "300px",
              backgroundColor: "#eee",
              display: "flex",
              justifyContent: "center"
            })}
          >
            <div
              className={css({
                display: "flex",
                alignItems: "center"
              })}
            >
              <div
                className={css({
                  width: "104px",
                  height: "104px",
                  backgroundColor: "#666",
                  borderRadius: "52px"
                })}
              />
              <div
                className={css({
                  display: "flex",
                  marginLeft: "32px",
                  flexDirection: "column"
                })}
              >
                <p
                  className={css({
                    fontSize: "13px",
                    color: "#555"
                  })}
                >
                  AUTHOR
                </p>
                <p
                  className={css({
                    fontSize: "20px",
                    color: "#222",
                    marginTop: "8px"
                  })}
                >
                  {author}
                </p>
                <p
                  className={css({
                    fontSize: "14px",
                    color: "#AAA",
                    marginTop: "7px",
                    maxWidth: "600px",
                    lineHeight: "24px"
                  })}
                >
                  There is a lot of exciting stuff going on in the stars above
                  us that make astronomy so much fun. The truth is the universe
                  is a constantly changing, moving, some would say “living”
                  thing because you just never know what you are going to see on
                  any given night of stargazing.
                </p>
              </div>
            </div>
          </div>
          {/* //#endregion: author details  */}
          {/* //#region: moreposts */}
          <div
            className={css({
              marginTop: "100px",
              display: "flex",
              justifyContent: "center"
            })}
          >
            <div
              className={css({
                width: "1200px"
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                })}
              >
                <h1>More posts tagged React</h1>
                <h3>MORE -></h3>
              </div>

              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between"
                })}
              >
                <SmallCardPost article={article} />
                <SmallCardPost article={article} />
                <SmallCardPost article={article} />
              </div>
            </div>
          </div>
          {/* //#endregion: moreposts */}
        </div>
      );
    }
  }
);

export default ArticleDetailPage;
