import React from "react";
import ReactDOM from "react-dom";
import glamorous from "glamorous";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
