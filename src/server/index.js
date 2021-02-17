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

// DATABASE CONNEXION
//import {MongoClient, uri} from "./db-connexion";
//const client = new MongoClient(uri, {useNewUrlParser: true});
// client.connect(err => {
//     console.log(err);
//     const collection = client.db("mwenbwa");
//     client.close();
// });

 //Importer fichier dbCalls
 const dbCalls = require('./dbCalls');

// app.get("/hello", (req, res) => {
//     console.log("salut les potes");
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("Hello, World!");
// });
app.post("/test", jsonParser, (req, res) => {
    console.log(req.body);
    console.log("===============================");
    res.statusCode = 201;
    res.json([{test: 1}]);
});

// GET REQUESTS
app.get("/trees", async (req, res) => {
    //console.log(req);
    const request = await dbCalls.dbGetTrees();
    //const data = JSON.parse(request);
    res.send(request);
});
app.get("/user/:userid", async (req, res) => {
    const userId = req.params["userid"];
    //const request = JSON.parse(await dbCalls.dbGetUser(userId));
    const request = await dbCalls.dbGetUser(userId);
    res.send(request);
});   
app.get("/leaderboard", async (req, res) => {
    //const request = JSON.parse(dbGetLeaderboard());
    const request = await dbCalls.dbGetLeaderboard();
    res.send(request);
});
app.get("/logs", async (req, res) => {
    const request = await dbCalls.dbGetLogs();
    res.send(request);
});

// CONNEXION
app.post("/login", jsonParser, async (req, res) => {
    const userInfo = req.body.userInfo;
    const pwd = req.body.password;
    try {
        const request = await dbCalls.dbLogin(userInfo);
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
    const userPwd = req.body.password;
    const userEmail = req.body.email;
    const userColor = req.body.color;
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
app.post("/changeMailAdress", jsonParser, (req, res) => {
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
app.post("/changePassword", jsonParser, (req, res) => {
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
app.post("/changeProfilePic", jsonParser, (req, res) => {
    const userId = req.body.userId;
    const newPic = req.body.newPic;
    const request = dbModifyPics(userId, newPic);
    res.send(request);
});

/*===================
SERVER LAUNCH
===================*/
/*
// INITIATE DATABASE
const arbustum = require("../../data/arbustum.json");
arbustum.forEach((tree)=>{
    const radius = tree.circonf/(200*Math.PI);
    if(tree.arbotag && !dbGetTree(tree.arbotag)) {
        dbAddTree(
            tree.arbotag,
            tree.nom_complet,
            tree.geoloc.lat,
            tree.geoloc.lon,
            2*radius,
            tree.hauteur_totale,
            Math.ceil(tree.circonf*tree.height)
        );
    }
});*/
// START SERVER
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);




/* //GET trees infos
app.get("/get-trees", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    let resultArray = [];

    client.connect(err => {
        console.log(err);
        
        const collection = client.db("mwenbwa");
        // perform actions on the collection object
        let cursor = collection.collection("trees").find();
        console.log(cursor);
        cursor.forEach(function(doc, err){
            console.error("error : " + err);
            console.log("doc : " + doc);
            resultArray.push(doc);

        }, function(){
            res.send(resultArray);
            client.close();
            
        })
        // const test = collection.collection("mwenbwa").insertOne({test: "test"});
        //client.close();
    });
    

    //res.send("yo");
}); */

