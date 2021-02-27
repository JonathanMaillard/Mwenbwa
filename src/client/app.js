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

const sessionId = -1 //infoFromCookies || -1;

const App = () => {
    const [session, setSession] = useState({
        "userId": -1,
        "username": "guest",
        "userEmail": "guest@BertrandleBG.com",
        // "userPic": "",
        "userColor": "#F94144",
        "userScore": 0,
        "userTrees": [],
    })
    const signUp = () => {
        const username = document.querySelector("#usernameUp");
        const userEmail = document.querySelector("#userEmailUp");
        const userPwd = document.querySelector("#userPwdUp");
        axios
            .post("/register", {
                "username": username,
                "userEmail": userEmail,
                "userPwd": userPwd,
            })
            .then(result => {
                document.cookie = `userId=${result.content.userId}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
                setSession({
                    "userId": result.content.userId,
                    "username": result.content.username,
                    "userEmail": result.content.email,
                    "userColor": result.content.color,
                    // "userPic": result.content.pic,
                    "userScore": result.content.score,
                    "userTrees": result.content.trees,
                });
                hideSignForm();
            })
            .catch(error => {
                let displayMessage;
                switch(error.msg) {
                    case "invalidPwd":
                        displayMessage = "Le mot de passe est incorrect.";
                        break;
                    case "invalidInfo":
                        displayMessage = "Un compte existe déjà pour l'adresse mail choisie.";
                        break;
                    case "error":
                    default:
                        displayMessage = "Il y a eu une erreur lors de la création du compte.";
                        break;
                }
                //INTEGRER L'ERREUR DANS LE DOM
            });
    }
    const signIn = () => {
        const userInfo = document.querySelector("#userInfoIn");
        const userPwd = document.querySelector("#userPwdIn");
        axios
            .post("/login", {
                "userInfo": userInfo,
                "userPwd": userPwd,
            })
            .then(result => {
                //FOUTRE LES COOKIES MDRRRRRR
                hideSignForm();
            })
            .catch(error => {
                let displayMessage;
                switch(error.msg) {
                    case "invalidPwd":
                        displayMessage = "Le mot de passe est incorrect.";
                        break;
                    case "invalidInfo":
                        displayMessage = "L'identifiant est incorrect.";
                        break;
                    case "error":
                    default:
                        displayMessage = "Il y a eu une erreur lors de la connexion.";
                        break;
                }
                //INTEGRER L'ERREUR DANS LE DOM
            })
    }

    function changeNameValidation() {
        axios.post("/changeUsername", {userId:session.userId, username:document.querySelector("#usernameInput").value}).then( result => {
            document.querySelector(".dashInput").disabled = true;
            document.querySelector(".dashInput").classList.remove("inputNameBorder");
            document.querySelector(".dashInputBtn").classList.remove("dashInputBtnClick");
            document.querySelector(".dashInput").placeholder = (result.username);
        })
    }


    return (
        <div id={"container"}>
            <div id={"mapid"}>
                <Map trees={[]} sessionInfo={session} />
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
            <Dashboard user={session} changeNameValidation={changeNameValidation}/>
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

    const cookieColor = 
    document.cookie && document.cookie.split(";").find(x => x.trim().startsWith("color"))
    ? document.cookie.split(";").find(x => x.trim().startsWith("color")).split("=")[1].trim()
    : undefined;
    document.querySelector("body").className= cookieColor ? cookieColor : "";
    console.log(document.cookie);

const colorButtons = [...document.querySelectorAll(".circle-picker>span")];
colorButtons.forEach((button,i) => {
    button.addEventListener("click", () => {
        console.log(document.cookie); 
        document.querySelector("body").className=`theme${i-9}`;
        document.cookie = `color=theme${i-9}; expires=${new Date(new Date().getTime()+1000*60*60*24*3).toGMTString()}`;
    })
})

