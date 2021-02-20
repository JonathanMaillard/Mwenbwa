/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

// EXPRESS DECLARATION
import express from "express";
import path from "path";
import bodyParser from "body-parser";
const {APP_PORT} = process.env;
const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));
const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({extended: false});

// BCRYPT DECLARATION
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//Importer fichier dbCalls
import {
    dbGetTrees,
    dbGetTree,
    dbGetUser,
    dbGetLeaderboard,
    dbGetLogs,
    dbGetUserFromInfo,
    dbRegister,
    dbBuyTree,
    dbLockTree,
    dbAddComment,
    dbChangeColor,
    dbModifyMail,
    dbModifyUsername,
    dbModifyPassword,
    dbModifyPics,
} from "./db-calls";

// GET REQUESTS
app.get("/trees", async (req, res) => {
    const request = await dbGetTrees();
    res.send(request);
});
app.get("/tree/:treeid", async (req, res) => {
    const treeId = req.params.treeid;
    const request = await dbGetTree(treeId);
    res.send(request);
});
app.get("/user/:userid", async (req, res) => {
    const userId = req.params.userid;
    const request = await dbGetUser(userId);
    res.send(request);
});
app.get("/leaderboard", async (req, res) => {
    const request = await dbGetLeaderboard();
    res.send(request);
});
app.get("/logs", async (req, res) => {
    const request = await dbGetLogs();
    res.send(request);
});

// CONNEXION
app.post("/login", jsonParser, async (req, res) => {
    const userInfo = req.body.userInfo;
    const pwd = req.body.userPwd;
    try {
        const request = await dbGetUserFromInfo(userInfo);
        if (request) {
            bcrypt.compare(pwd, request, (err, result) => {
                res.send(result ? "correct" : "invalidPwd");
            });
        } else {
            res.send("invalidInfo");
        }
    } catch (e) {
        console.log(e);
        res.send("error");
    }
});
app.post("/register", jsonParser, (req, res) => {
    const username = req.body.username;
    const userEmail = req.body.userEmail;
    const userPwd = req.body.userPwd;
    const userColor = req.body.userColor;
    let request;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(userPwd, salt, (error, hash) => {
            request = dbRegister(username, hash, userEmail, userColor);
        });
    });
    res.send(request);
});

// GAME ACTIONS COMMANDS
app.post("/buyTree", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const treeId = req.body.treeId;
    const treePrice = req.body.treePrice;
    const request = dbBuyTree(treeId, userId, treePrice);
    res.send(request);
});
app.post("/lockTree", jsonParser, (req, res) => {
    const treeId = req.body.treeId;
    const treeLockPrice = req.body.treeLockPrice;
    const request = dbLockTree(treeId, treeLockPrice);
    res.send(request);
});
app.post("/comment", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const treeId = req.body.treeId;
    const comment = req.body.comment;
    const request = dbAddComment(treeId, userId, comment);
    res.send(request);
});

// CHANGE SETTINGS COMMANDS
app.post("/changeColor", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const color = req.body.color;
    const request = dbChangeColor(userId, color);
    res.send(request);
});
app.post("/changeEmail", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const userEmail = req.body.userEmail;
    const request = dbModifyMail(userId, userEmail);
    res.send(request);
});
app.post("/changeUsername", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const username = req.body.username;
    const request = dbModifyUsername(userId, username);
    res.send(request);
});
app.post("/changePwd", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const newPwd = req.body.newPwd;
    const oldPwd = req.body.oldPwd;
    try {
        const request = dbGetUser(userId);
        if (request) {
            bcrypt.compare(oldPwd, request, (errComp, result) => {
                result &&
                    bcrypt.genSalt(saltRounds, (errSalt, salt) => {
                        bcrypt.hash(newPwd, salt, (errHash, hash) => {
                            result && dbModifyPassword(userId, hash);
                        });
                    });
                res.send(result ? "correct" : "invalidPwd");
            });
        } else {
            res.send("invalidId");
        }
    } catch (e) {
        console.log(e);
        res.send("error");
    }
});
app.post("/changePic", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const userPic = req.body.userPic;
    const request = dbModifyPics(userId, userPic);
    res.send(request);
});

/*===================
SERVER LAUNCH
===================*/
// INITIATE DATABASE
console.time("dataset");
const axios = require("axios");
const dataSetUrl =
    "https://opendata.liege.be/explore/dataset/arbustum/download/?format=json&timezone=Europe/Berlin&lang=fr";
axios
    .get(dataSetUrl)
    .then(response => {
        // response.data.forEach((tree)=>{
        //     if(
        //         tree.fields.arbotag
        //         && tree.fields.hauteur_totale
        //         && tree.fields.circonf
        //         // && await !dbGetTree(tree.arbotag)
        //     ) {
        //         // dbAddTree({
        //         //     "arbotag": tree.fields.arbotag,
        //         //     "name": tree.fields.nom_complet ? tree.fields.nom_complet : "",
        //         //     "latitude": tree.fields.x_lambda,
        //         //     "longitude": tree.fields.y_phi,
        //         //     "height": tree.fields.hauteur_totale,
        //         //     "circonf": tree.fields.circonf,
        //         //     "basePrice": Math.ceil(tree.fields.circonf*tree.fields.hauteur_totale)
        //         // });
        //         // console.log("New tree inserted :", tree.fields.arbotag);
        //     }
        // });
        console.log(response.data[0], response.data.length);
    })
    .catch(e => {
        console.log("sad because :", e);
    })
    .finally(() => console.timeEnd("dataset"));

// START SERVER
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
