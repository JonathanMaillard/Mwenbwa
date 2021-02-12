/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

const MongoClient = require("mongodb").MongoClient;
const uri =
    "mongodb+srv://dev:shrek55@smaragdencluster.jzsi8.mongodb.net/mwenbwa?retryWrites=true&w=majority";
// let collection;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});


client.connect(err => {
    console.log(err);
    const collection = client.db("mwenbwa");
    // perform actions on the collection object
    // console.log(collection.collection("mwenbwa").find());
    // const test = collection.collection("mwenbwa").insertOne({test: "test"});
    client.close();
});

import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);




//GET trees infos
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
});

