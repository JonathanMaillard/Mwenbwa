//File for managing DB manipulation


// DATABASE CONNEXION
import {MongoClient, uri} from "./db-connexion";
//const client = new MongoClient(uri, { useUnifiedTopology: true });


//GET

//Get all trees
const dbGetTrees = () =>{
     
    const client = new MongoClient(uri, { useUnifiedTopology: true });

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
      return (run());
      
      
}

//Get a specific tree
const dbGetTree = (tree) => {

}

//Get a user
const dbGetUser = (userId) =>{

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('players');

          const cursor = await collection.find({ playerId: userId });
          const result = await cursor.toArray();

          //console.log(result);
          return result;

         

        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      //run().catch(console.dir);
      return (run());

}

//Get the leaderboard
const dbGetLeaderboard = () =>{

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('playersTest');

          const query = {};
          const options = {
            // sort returned documents in descending order by score
            sort: { score: -1 },
            // Include only the username, color and score fields in each returned document
            projection: { _id: 0, username: 1, color: 1, score: 1 },
          };
          const cursor = await collection.find(query, options);
          const result = await cursor.toArray();

          //console.log(result);
          return result;

         

        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      //run().catch(console.dir);
      return (run());
}


//Get the logs
const dbGetLogs = () =>{

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('logs');

          const query = {};
          const options = {
            // sort returned documents in descending order by score
            sort: {_id: -1 },
            // Include only the username, color and score fields in each returned document
            projection: { _id: 0, content: 1 },
          };
          const cursor = await collection.find(query, options);
          const result = await cursor.toArray();

          //console.log(result);
          return result;

         

        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      //run().catch(console.dir);
      return (run());

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
    dbGetTrees, dbGetUser, dbGetLeaderboard, dbGetLogs
}