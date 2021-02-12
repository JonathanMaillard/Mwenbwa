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
const {APP_PORT} = process.env;
const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// BCRYPT DECLARATION
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = pwd => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
            // Store hash in your password DB.
        });
    });
};

// DATABASE CONNEXION
import {MongoClient, uri} from "./db-connexion";
const client = new MongoClient(uri, {useNewUrlParser: true});
// client.connect(err => {
//     console.log(err);
//     const collection = client.db("mwenbwa");
//     client.close();
// });

// app.get("/hello", (req, res) => {
//     console.log("salut les potes");
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("Hello, World!");
// });
app.post("/test", (req, res) => {
    console.log(req);
    res.statusCode = 512;
    res.json({test: 1});
});

// GET REQUESTS
app.get("/trees", (req, res) => {
    console.log(req);
    // res.send( dbGetTrees() );
});
app.get("/user", (req, res) => {
    const userId = req.param("id");
    // res.send( dbGetUser(userId) );
});
app.get("/leaderboard", (req, res) => {
    // res.send( dbGetLeaderboard() );
});
app.get("/logs", (req, res) => {
    const userId = req.param("id");
    // res.send( dbGetLogs() );
});

// CONNEXION
app.post("/login", (req, res) => {
    const user = req.param("user");
    const pwd = req.param("pwd");
    // res.send( dbLogin(user, pwd) );
});
app.post("/register", (req, res) => {
    const userId = req.param("user");
    const userPassword = req.param("password");
    const userEmail = req.param("email");
    const userColor = req.param("color");
    // res.send( dbGetLogs() );
});

// GAME ACTIONS COMMANDS
app.post("/buyTree", (req, res) => {
    // res.send( );
});
app.post("/lockTree", (req, res) => {
    // res.send( );
});
app.post("/comment", (req, res) => {
    // res.send( );
});

// CHANGE SETTINGS COMMANDS
app.post("/changeColor", (req, res) => {
    // res.send( );
});
app.post("/changeMailAdress", (req, res) => {
    // res.send( );
});
app.post("/changeUsername", (req, res) => {
    // res.send( );
});
app.post("/changePassword", (req, res) => {
    // res.send( );
});
app.post("/changeProfilePic", (req, res) => {
    // res.send( );
});

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

