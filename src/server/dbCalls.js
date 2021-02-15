//File for managing DB manipulation

//Connexion
// DATABASE CONNEXION
import {MongoClient, uri} from "./db-connexion";
//const client = new MongoClient(uri, {useNewUrlParser: true});
//const db = client.db(mwenbwa);

//GET

//Get all trees
const dbGetTrees = () =>{
    const client = new MongoClient(uri, {useNewUrlParser: true});
    const db = client.db("mwenbwa");

    const trees = db.collection("trees").find();
    

    return trees;

}

//Get a specific tree
const dbGetTree = (tree) => {

}

//Get a user
const dbGetUser = (userId) =>{

}

//Get the leaderboard
const dbGetLeaderboard = () =>{

}


//Get the logs
const dbGetLogs = () =>{

}



// POST


//Login
const dbLogin = (user, password) =>{

}


//Register
const dbRegister = (userId, userPassword, userEmail, userColor) =>{

}



// GAME ACTIONS

//Buy tree
const dbBuyTree = (tree, userId) => {

}

//Add comment
const dbLockTree = (tree) => {

}

//Add a comment
const dbAddComment = (tree, user, newComment) => {

}



//CHANGE SETTINGS

//Change Color
const dbChangeColor = (userId, newColor) => {

}

//Change Mail
const dbModifyMail = (userId, newMail) => {

}

//Change Username
const dbModifyUsername = (userId, newUsername) => {

}

//Change Password
const dbModifyPassword = (userId, newPassword) => {

}


//Modify Profile Pics
const dbModifyPics = (userId, newPics) => {

}