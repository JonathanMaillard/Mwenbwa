/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
const axios = require("axios");

import HelloWorld from "./components/hello";

const test = () => {
    const id = 5;
    axios
        .post("/test", {content: 5})
        .then(() => {
            console.log("yay");
        })
        .catch(e => {
            console.log("sad because :", e);
        });
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "POST", `/`, false ); // false for synchronous request
    // xmlHttp.send();
    // console.log( xmlHttp.responseText );
};

ReactDOM.render(<HelloWorld onClick={test} />, document.querySelector("#app"));
