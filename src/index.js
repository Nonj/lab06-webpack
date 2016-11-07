import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import './css/main.css';

console.log("Hello webpack!"); //a simple testing String

ReactDOM.render(<App/>, document.querySelector('#root'));
