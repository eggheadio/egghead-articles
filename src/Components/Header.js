import React, { Component } from "react";
import { css } from "glamor";

class Header extends Component {
  render() {
    return (
      <div
        className={css({
          height: "430px",
          backgroundColor: "#F5F5F5",
          paddingTop: "32px",
          paddingRight: "180px",
          paddingLeft: "180px",
          color: "#232323",
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        })}
        >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
              verticalAlign: "middle",
              alignItems: "center"
          })}
          >
          <img
            src="https://avatars2.githubusercontent.com/u/5975001?v=4&s=200"
            alt="logo"
            className={css({
              height: "52px",
              width: "52px"
            })}
          />
        
          <div
           className={css({
                  alignItems: "center",
               display: "flex"
           })}  
          >
                 
         <div
           className={css({
           background: "url(https://cl.ly/nrl2/download/search.svg) no-repeat",
           backgroundPosition: "50% 50%",
           width: "20px",
           height: "20px",
           marginRight: "20px",
           padding: "20px",
           transition: "all 0.2s ease-in-out",
           ":hover": {
            cursor: "pointer",
            backgroundSize: "64%",
            transition: "all 0.2s ease-in-out"
            }
           })}
           />
           
{ /* region: subscribe button  

         <button
            className={css({
              height: "40px",
              width: "140px",
              backgroundColor: "transparent",
              border: "2px solid #E9E9E9",
              color: "#232323",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
               ":hover": {
                 background: "white",
                 border: "2px solid white",
                 transition: "all 0.2s ease-in-out",
                 }
            })}
          >
            SUBSCRIBE
          </button>
          
#end-region: subscribe button */}


         </div>          
         </div>

        <p
          className={css({
            fontSize: "3em",
            fontWeight: "500",
            lineHeight: "53px",
            marginTop: "54px"
          })}
        >
          Making Programmers Badass
        </p>

        <p
          className={css({
            opacity: "0.6",
            color: "#232323",
            fontSize: "1.5em",
            lineHeight: "32px",
            marginTop: "20px"
          })}
        >
          The Official Egghead.io Knowledge Hub
        </p>
        <input
          type="text"
          className={css({
            height: "48px",
            width: " 460px",
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            paddingLeft: "48px",
            marginTop: "40px",
            fontSize: "15px",
          })}
          placeholder="Search posts, authors, courses,..."
        />
      </div>
    );
  }
}

export default Header;
