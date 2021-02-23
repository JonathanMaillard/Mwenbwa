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
const axios = require("axios");

import Map from "./components/map";
import Sign from "./components/sign";
import Rules from "./components/rules";
import Disconnect from "./components/disconnect";
import Leaderboard from "./components/leaderboard";
import Gamelog from "./components/gamelog";
import Profile from "./components/profile";
import Button from "./components/button";
import Dashboard from "./components/dashboard";

const App = () => (
    <div id={"container"}>
        <div id={"mapid"}>
            <Map trees={[]} />
        </div>

        <Button />
        <div id={"leaderboard"} />
        <div id={"gamelog"} />

        <div id={"app"}>
            <Profile />
        </div>

        <Sign />
        <Rules />
        <Disconnect />
        <Gamelog />

        <Dashboard />
    </div>
);

axios
    .get(`/leaderboard`)
    .then(response => {
        ReactDOM.render(
            <Leaderboard leaderboard={response.data} />,
            document.querySelector("#leaderboard"),
        );
    })
    .catch(e => {
        console.log("sad because :", e);
    });

axios
    .get(`/logs`)
    .then(response => {
        ReactDOM.render(
            <Gamelog logs={response.data} />,
            document.querySelector("#gamelog"),
        );
    })
    .catch(e => {
        console.log("sad because :", e);
    });

ReactDOM.render(<App />, document.querySelector("#root"));

axios
    .get("/trees")
    .then(response => {
        console.log(response.data.length);
        ReactDOM.render(
            <Map trees={response.data} />,
            document.querySelector("#mapid"),
        );
        console.log("hello");
    })
    .catch(e => {
        console.log("sad because :", e);
    });
