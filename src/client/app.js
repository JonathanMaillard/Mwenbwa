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
import {hideSignForm} from "./display/hide-sign-form";
import {showConnectModal} from "./display/show-modal";
import {hideDisconnectModal} from "./display/hide-modal";

const defaultUser = {
    "userId": undefined,
    "username": "guest",
    "userEmail": "mail@example.com",
    "userColor": "#F94144",
    "userScore": 3,
}
const cookieSessionId = 
    document.cookie && document.cookie.split(";").find(x => x.trim().startsWith("userId"))
    ? document.cookie.split(";").find(x => x.trim().startsWith("userId")).split("=")[1].trim()
    : undefined;
cookieSessionId && axios
    .get(`/getUser/${cookieSessionId}`)
    .then((result) => {
        setSession({
            "userId": result.content.userId,
            "username": result.content.username,
            "userEmail": result.content.email,
            "userColor": result.content.color,
            "userScore": result.content.score,
            "userTrees": result.content.trees,
        })
    })
    .catch(error => console.log(error))

const App = () => {
    const [session, setSession] = useState({
        "userId": 0,
        "username": "guest",
        "userEmail": "",
        "userColor": "#F94144",
        "userScore": 0,
        "userTrees": [],
    })
    const signUp = () => {
        const username = document.querySelector("#usernameUp").value;
        const userEmail = document.querySelector("#userEmailUp").value;
        const userPwd = document.querySelector("#userPwdUp").value;
        axios
            .post("/register", {
                "username": username,
                "userEmail": userEmail,
                "userPwd": userPwd,
            })
            .then(result => {
                console.log(result);
                document.cookie = `userId=${result.data.content._id}; expires=${new Date(new Date().getTime()+1000*60*60*24*3).toGMTString()}`;
                setSession({
                    "userId": result.data.content._id,
                    "username": result.data.content.username,
                    "userEmail": result.data.content.email,
                    "userColor": result.data.content.color,
                    "userScore": result.data.content.score,
                    "userTrees": result.data.content.trees || [],
                });
                hideSignForm();
            })
            .catch(error => {
                console.log(error);
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
        const userInfo = document.querySelector("#userInfoIn").value;
        const userPwd = document.querySelector("#userPwdIn").value;
        axios
            .post("/login", {
                "userInfo": userInfo,
                "userPwd": userPwd,
            })
            .then(result => {
                console.log(result);
                document.cookie = `userId=${result.data.content._id}; expires=${new Date(new Date().getTime()+1000*60*60*24*3).toGMTString()}`;
                setSession({
                    "userId": result.data.content._id,
                    "username": result.data.content.username,
                    "userEmail": result.data.content.email,
                    "userColor": result.data.content.color,
                    "userScore": result.data.content.score,
                    "userTrees": result.data.content.trees || [],
                });
                hideSignForm();
            })
            .catch(error => {
                console.log("HELP HELP HELP", error);
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
    const logout = () => {
        document.cookie = "userId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        setSession(defaultUser);
        hideDisconnectModal();
        showConnectModal();
    }
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
            <Disconnect logout={logout} />

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
