import React, { Component } from "react";
import { css } from "glamor";
import { categoryTextStyle } from "./../Styles/TextStyles";

const TimeText = ({ topText, bottomText }) => (
  <div
    className={css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })}
  >
    <p
      className={css({
        fontSize: "34px",
        color: "#555"
      })}
    >
      {topText}
    </p>
    <p
      className={css({
        fontSize: "12px",
        color: "#999"
      })}
    >
      {bottomText}
    </p>
  </div>
);

class PricingTierCard extends Component {
  render() {
    return (
      <div
        className={css({
          width: "380px",
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "150px",
          border: "1px solid black",
          backgroundColor: "white"
        })}
      >
        <div
          className={css({
            width: "164px",
            height: "164px",
            backgroundColor: "#666",
            marginTop: "-82px",
            alignSelf: "center"
          })}
        />

        <h1
          className={css({
            marginTop: "30px",
            alignSelf: "center"
          })}
        >
          PRO
        </h1>

        <p
          className={css({
            marginTop: "8px",
            width: "380px",
            fontSize: "18px",
            textAlign: "center",
            color: "#888"
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* discount */}
        {this.props.discount !== undefined ? (
          <div
            className={css({
              margin: "0px -10px",
              marginTop: "32px",
              backgroundColor: "#888",
              display: "flex",
              padding: "20px 40px",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
              background: `repeating-linear-gradient(
              45deg,
              #666,
              #666 10px,
              #333 10px,
              #333 12px
            )`,
              ":before": {
                height: "76px",
                width: "100px",
                display: "block",
                position: "absolute",
                zIndex: "-10",
                content: " ",
                background: "#222",
                marginLeft: "-40px",
                marginTop: "-34px",
                transform: "skewY(-18deg)",
                transformOrigin: "top right"
              },
              ":after": {
                height: "76px",
                width: "100px",
                display: "block",
                position: "absolute",
                zIndex: "-10",
                content: " ",
                background: "#222",
                marginTop: "-34px",
                transform: "skewY(18deg)",
                transformOrigin: "top left",
                marginLeft: "260px"
              }
            })}
          >
            <p className={css({ fontSize: "30px" })}>SAVE 50%</p>
            <p className={css({ fontSize: "15px" })}>usually 299,99$</p>
          </div>
        ) : (
          <div />
        )}

        {/* rate */}
        <div
          className={css({
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            marginTop: "75px",
            width: "340px",
            alignSelf: "center"
          })}
        >
          <div
            className={css({
              display: "flex",
              marginTop: "-30px",
              padding: "10px",
              backgroundColor: "white",
              alignSelf: "center"
            })}
          >
            <p
              className={css({
                color: "#888"
              })}
            >
              USD
            </p>
            <p
              className={css({
                fontSize: "17px"
              })}
            >
              $
            </p>
            <p
              className={css({
                fontSize: "52px",
                margin: "0 10px",
                marginTop: "-10px"
              })}
            >
              99
            </p>
            <p>50</p>
          </div>

          <p
            className={css({
              color: "#AAA",
              letterSpacing: "2px",
              fontSize: "12px",
              alignSelf: "center",
              marginBottom: "20px"
            })}
          >
            PER USER / BILLED ANUALLY
          </p>

          {this.props.discount !== undefined ? (
            <div
              className={css({
                backgroundColor: "#ddd",
                display: "flex",
                flexDirection: "column",
                flexBasis: "100%"
              })}
            >
              <p
                className={css({
                  marginTop: "12px",
                  marginBottom: "18px",
                  alignSelf: "center"
                })}
              >
                deal ends in
              </p>
              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: "12px"
                })}
              >
                <TimeText topText="4" bottomText="DAYS" />
                <TimeText topText="23" bottomText="HOURS" />
                <TimeText topText="34" bottomText="MINUTES" />
                <TimeText topText="45" bottomText="SECONDS" />
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>

        {/* level up */}
        <button
          className={css({
            width: "340px",
            alignSelf: "center",
            backgroundColor: "#333",
            color: "white",
            padding: "15px 30px 15px 30px",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: "600",
            fontFamily: "Avenir next",
            border: "none",
            marginTop: "25px"
          })}
        >
          LEVEL UP MY SKILLS
        </button>

        <p
          className={css({
            textAlign: "left",
            marginTop: "25px",
            fontSize: "16px",
            marginLeft: "30px",
            fontFamily: "helvetica neue",
            fontWeight: "900"
          })}
        >
          You’ll get:
        </p>

        <ul
          className={css({
            fontSize: "16px",
            color: "#888",
            lineHeight: "32px"
          })}
        >
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Doloremque cumque quas quo sit.</li>
          <li>Voluptates eius debitis possimus eos?</li>
          <li>In minima vel velit maiores.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Doloremque cumque quas quo sit.</li>
          <li>Voluptates eius debitis possimus eos?</li>
          <li>In minima vel velit maiores.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Doloremque cumque quas quo sit.</li>
          <li>Voluptates eius debitis possimus eos?</li>
          <li>In minima vel velit maiores.</li>
        </ul>

        {/* other features */}
        {/* <div
          className={css({
            border: "1px solid #ddd",
            display: "flex",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "15px",
            width: "300px",
            height: "48px",
            margin: "15px 0px 25px 0px",
            padding: "0px 20px"
          })}
        >
          <p> + </p>
          <p> {"all pro and premium features"} </p>
          <p> > </p>
        </div> */}
      </div>
    );
  }
}

export default PricingTierCard;
