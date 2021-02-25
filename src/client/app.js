/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./../style.scss";
const axios = require("axios");

import Map from "./components/map";
import Sign from "./components/sign";
import Rules from "./components/rules";
import Disconnect from "./components/disconnect";
import Profile from "./components/profile";
import Button from "./components/button";
import Dashboard from "./components/dashboard";
//import {hideSignForm} from "../display/hide-sign-form";

// const sessionId = -1 //infoFromCookies || -1;

const App = () => {
    // const [session, setSession] = useState({
    //     "userId": -1,
    //     "username": "guest",
    //     "userEmail": "",
    //     // "userPic": "",
    //     "userColor": "#F94144",
    //     "userScore": 0,
    // })
    // const signUp = () => {
    //     const username = document.querySelector("#usernameUp");
    //     const userEmail = document.querySelector("#userEmailUp");
    //     const userPwd = document.querySelector("#userPwdUp");
    //     axios
    //         .post("/register", {
    //             "username": username,
    //             "userEmail": userEmail,
    //             "userPwd": userPwd,
    //         })
    //         .then(result => {
    //             document.cookie = `userId=${result.content.userId}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    //             setSession({
    //                 "userId": result.content.userId,
    //                 "username": result.content.username,
    //                 "userEmail": result.content.email,
    //                 "userColor": result.content.color,
    //                 // "userPic": result.content.pic,
    //                 "userScore": result.content.score,
    //             });
    //             hideSignForm();
    //         })
    //         .catch(error => {
    //             let displayMessage;
    //             switch(error.msg) {
    //                 case "invalidPwd":
    //                     displayMessage = "Le mot de passe est incorrect.";
    //                     break;
    //                 case "invalidInfo":
    //                     displayMessage = "Un compte existe déjà pour l'adresse mail choisie.";
    //                     break;
    //                 case "error":
    //                 default:
    //                     displayMessage = "Il y a eu une erreur lors de la création du compte.";
    //                     break;
    //             }
    //             //INTEGRER L'ERREUR DANS LE DOM
    //         });
    // }
    // const signIn = () => {
    //     const userInfo = document.querySelector("#userInfoIn");
    //     const userPwd = document.querySelector("#userPwdIn");
    //     axios
    //         .post("/login", {
    //             "userInfo": userInfo,
    //             "userPwd": userPwd,
    //         })
    //         .then(result => {
    //             //FOUTRE LES COOKIES MDRRRRRR
    //             hideSignForm();
    //         })
    //         .catch(error => {
    //             let displayMessage;
    //             switch(error.msg) {
    //                 case "invalidPwd":
    //                     displayMessage = "Le mot de passe est incorrect.";
    //                     break;
    //                 case "invalidInfo":
    //                     displayMessage = "L'identifiant est incorrect.";
    //                     break;
    //                 case "error":
    //                 default:
    //                     displayMessage = "Il y a eu une erreur lors de la connexion.";
    //                     break;
    //             }
    //             //INTEGRER L'ERREUR DANS LE DOM
    //         })
    // }
    return (
        <div id={"container"}>
            <div id={"mapid"}>
                <Map trees={[]} />
            </div>

            <Button />

            <div id={"app"}>
                <Profile user={session}/>
            </div>

            <div id={"leaderboard"} />
            <div id={"gamelog"} />
            <Sign signUp={signUp} signIn={signIn} />
            <Rules />
            <Disconnect />
            <Dashboard />
        </div>
    );
};

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
