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
import {showConnectModal, toggleProfile} from "./display/show-modal";
import {hideDisconnectModal} from "./display/hide-modal";

const defaultUser = {
    userId: -1,
    username: "guest",
    userEmail: "guest@BertrandleBG.com",
    userColor: "#F94144",
    userScore: 3,
    userTrees: [],
};

const addColorEvents = () => {
    const colorButtons = [...document.querySelectorAll(".circle-picker>span")];
    colorButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
            document.querySelector("body").className = `theme${i + 1}`;
            document.cookie = `color=theme${i + 1}; expires=${new Date(
                new Date().getTime() + 1000 * 60 * 60 * 24 * 3,
            ).toGMTString()}`;
        });
    });
};
let startSession = defaultUser;

const App = () => {
    const [session, setSession] = useState(startSession);
    const changeNameValidation = () => {
        console.log(session);
        axios
            .post("/changeUsername", {
                userId: session.userId,
                username: document.querySelector("#usernameInput").value,
            })
            .then(result => {
                document.querySelector(".dashInput").disabled = true;
                document
                    .querySelector(".dashInput")
                    .classList.remove("inputNameBorder");
                document
                    .querySelector(".dashInputBtn")
                    .classList.remove("dashInputBtnClick");
                document.querySelector(".dashInput").placeholder =
                    result.username;
            });
    };
    const signUp = () => {
        const username = document.querySelector("#usernameUp").value;
        const userEmail = document.querySelector("#userEmailUp").value;
        const userPwd = document.querySelector("#userPwdUp").value;
        axios
            .post("/register", {
                username,
                userEmail,
                userPwd,
            })
            .then(result => {
                document.cookie = `userId=${
                    result.data.content._id
                }; expires=${new Date(
                    new Date().getTime() + 1000 * 60 * 60 * 24 * 3,
                ).toGMTString()}`;
                const newSession = {
                    userId: result.data.content._id,
                    username: result.data.content.username,
                    userEmail: result.data.content.email,
                    userColor: result.data.content.color,
                    userScore: result.data.content.score,
                    userTrees: result.data.content.trees || [],
                };
                setSession(newSession);
                hideSignForm();
                console.log("result", result.data.content);
                console.log("newSession", newSession);
                setTimeout(() => console.log("session", session), 5000);
                ReactDOM.render(
                    <Profile user={newSession} />,
                    document.querySelector("#profile"),
                );
                ReactDOM.render(
                    <Dashboard
                        user={newSession}
                        changeNameValidation={changeNameValidation}
                    />,
                    document.querySelector("#dashboard"),
                );
                addColorEvents();
            })
            .catch(error => {
                let displayMessage;
                switch (error.msg) {
                    case "invalidPwd":
                        displayMessage = "Le mot de passe est incorrect.";
                        break;
                    case "invalidInfo":
                        displayMessage =
                            "Un compte existe déjà pour l'adresse mail choisie.";
                        break;
                    case "error":
                    default:
                        displayMessage =
                            "Il y a eu une erreur lors de la création du compte.";
                        break;
                }
                //INTEGRER L'ERREUR DANS LE DOM
            });
    };
    const signIn = () => {
        const userInfo = document.querySelector("#userInfoIn").value;
        const userPwd = document.querySelector("#userPwdIn").value;
        axios
            .post("/login", {
                userInfo,
                userPwd,
            })
            .then(result => {
                document.cookie = `userId=${
                    result.data.content._id
                }; expires=${new Date(
                    new Date().getTime() + 1000 * 60 * 60 * 24 * 3,
                ).toGMTString()}`;
                const newSession = {
                    userId: result.data.content._id,
                    username: result.data.content.username,
                    userEmail: result.data.content.email,
                    userColor: result.data.content.color,
                    userScore: result.data.content.score,
                    userTrees: result.data.content.trees || [],
                };
                setSession(newSession);
                hideSignForm();
                console.log("result", result.data.content);
                console.log("newSession", newSession);
                setTimeout(() => console.log("session", session), 5000);
                ReactDOM.render(
                    <Profile user={newSession} />,
                    document.querySelector("#profile"),
                );
                ReactDOM.render(
                    <Dashboard
                        user={newSession}
                        changeNameValidation={changeNameValidation}
                    />,
                    document.querySelector("#dashboard"),
                );
                addColorEvents();
            })
            .catch(error => {
                let displayMessage;
                switch (error.msg) {
                    case "invalidPwd":
                        displayMessage = "Le mot de passe est incorrect.";
                        break;
                    case "invalidInfo":
                        displayMessage = "L'identifiant est incorrect.";
                        break;
                    case "error":
                    default:
                        displayMessage =
                            "Il y a eu une erreur lors de la connexion.";
                        break;
                }
                //INTEGRER L'ERREUR DANS LE DOM
            });
    };
    const logout = () => {
        document.cookie = "userId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        setSession(defaultUser);
        hideDisconnectModal();
        showConnectModal();
        toggleProfile();
    };

    const cookieSessionId =
        document.cookie &&
        document.cookie.split(";").find(x => x.trim().startsWith("userId"))
            ? document.cookie
                    .split(";")
                    .find(x => x.trim().startsWith("userId"))
                    .split("=")[1]
                    .trim()
            : 0;
    console.log("cookieSessionId : ", cookieSessionId)
    cookieSessionId &&
        axios
            .get(`/user/${cookieSessionId}`)
            .then(result => {
                console.log("VOICI LE RESULTAT : ", result);
                document.cookie = `userId=${
                    result.data[0]._id
                }; expires=${new Date(
                    new Date().getTime() + 1000 * 60 * 60 * 24 * 3,
                ).toGMTString()}`;
                startSession = {
                    userId: result.data[0]._id,
                    username: result.data[0].username,
                    userEmail: result.data[0].email,
                    userColor: result.data[0].color,
                    userScore: result.data[0].score,
                    userTrees: result.data[0].trees || [],
                };
                console.log("result", result.data.content);
                console.log("startSession", startSession);
                ReactDOM.render(
                    <Profile user={startSession} />,
                    document.querySelector("#profile"),
                );
                ReactDOM.render(
                    <Dashboard
                        user={startSession}
                        changeNameValidation={changeNameValidation}
                    />,
                    document.querySelector("#dashboard"),
                );
                addColorEvents();
            });


    return (
        <div id={"container"}>
            <div id={"mapid"}>
                <Map trees={[]} sessionInfo={session} />
            </div>

            <Button />

            <div id={"profile"}>
                <Profile user={session} />
            </div>

            <div id={"leaderboard"} />
            <div id={"gamelog"} />
            <Sign
                signUp={signUp}
                signIn={signIn}
                state={cookieSessionId ? "sign" : "sign show-modal"}
            />
            <Rules />
            <Disconnect logout={logout} />
            <div id={"dashboard"}>
                <Dashboard
                    user={session}
                    changeNameValidation={changeNameValidation}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

axios
    .get("/trees")
    .then(response => {
        ReactDOM.render(
            <Map trees={response.data} />,
            document.querySelector("#mapid"),
        );
    })
    .catch(e => {
        console.log("sad because :", e);
    });

const cookieColor =
    document.cookie &&
    document.cookie.split(";").find(x => x.trim().startsWith("color"))
        ? document.cookie
              .split(";")
              .find(x => x.trim().startsWith("color"))
              .split("=")[1]
              .trim()
        : "";
console.log(cookieColor);
document.querySelector("body").className = cookieColor ? cookieColor : "";

addColorEvents();
