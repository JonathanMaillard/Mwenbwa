/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./../style.scss";

import Map from "./components/map";
// import Rules from "./components/rules";
import Profile from "./components/profile";
import Button from "./components/button";

const App = () => (
    <div id={"container"}>
        <div id={"mapid"}>
            <Map />
        </div>

        <Button />

        <div id={"app"}>
            <Profile />
        </div>
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
