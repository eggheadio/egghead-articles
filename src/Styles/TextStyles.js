import { css } from "glamor";

/* Fonts */

let fontSystem = css({ fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica neue, helvetica, roboto, noto, arial, sans-serif" })

/* Card Text Styles */

export const categoryTextStyle = css({
  marginTop: "20px",
  fontWeight: "bold",
  letterSpacing: "2px",
  lineHeight: "24px",
  opacity: "0.4",
  fontSize: "12px",
});

export const articleTitle = css({
  marginTop: "5px",
  lineHeight: "30px",
  fontWeight: "bold",
  fontSize: "26px",
  marginBottom: "10px",
  fontFamily: "'KievitWeb W07 Bold'"
});

export const articleSubtitle = css({
    height: "auto",
    /*minHeight: "50px",*/
    fontWeight: "200",
    opacity: "0.5",
    fontSize: "16px",
    lineHeight: "24px"
});

export const authorName = css({
        fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica neue, helvetica, roboto, noto, arial, sans-serif",
    fontSize: "14px",
    lineHeight: "20px"
    
});


export const publishedDate = css({
    fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica neue, helvetica, roboto, noto, arial, sans-serif",
    fontSize: "12px",
    lineHeight: "20px",
    opacity: "0.4",
    color: "#262626"
});

/* Topics Tab Text Styles */

export const topicTitle = css({
    fontFamily: "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica neue, helvetica, roboto, noto, arial, sans-serif",
    fontSize: "16px",
    lineHeight: "20px",
});

/* Article Detail Text Styles */

export const articleBody = css({
    fontFamily: "'KievitSlabWeb W03 Regul1473175'",
    fontSize: "20px",
    lineHeight: "32px",
    marginTop: "80px",
    marginLeft: "80px",
    marginRight: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#4E4E4E",
    fontSmoothing: "antialiased"
});

