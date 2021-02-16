//File for managing DB manipulation


// DATABASE CONNEXION
import {MongoClient, uri} from "./db-connexion";
const client = new MongoClient(uri, { useUnifiedTopology: true });


//GET

//Get all trees
const dbGetTrees = async () =>{
     
    

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('trees');
          
          //const query = { arbotag: 1770 };
          //const tree = await collection.findOne(query);
          //console.log(tree);

          const cursor = await collection.find();
          const result = await cursor.toArray();

          //console.log(result);
          return result;

         

        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      //run().catch(console.dir);
      return (await run());
      
      
}

//Get a specific tree
const dbGetTree = (tree) => {

}

//Get a user
const dbGetUser = async (userId) =>{

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('players');

          const cursor = await collection.find({player : });
          const result = await cursor.toArray();

          //console.log(result);
          return result;

         

        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      //run().catch(console.dir);
      return (await run());

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

module.exports ={
    dbGetTrees
}