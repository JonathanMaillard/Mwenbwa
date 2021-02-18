//File for managing DB manipulation


// DATABASE CONNEXION
import {MongoClient, uri} from "./db-connexion";


//GET

//Get all trees
const dbGetTrees = () =>{
     
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('trees');
          
          const query = {
              arbotag: { $ne: null },
              circonf: { $ne: null },
              hauteur_totale: { $ne: null }
          };
          const options = {
            // Include only the arbotags and geoloc in each returned document
            projection: { _id: 0, arbotag: 1, x_lambda: 1, y_phi: 1 },
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

//Get a specific tree
const dbGetTree = (tree) => {

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('trees');
          
          const query = {
              arbotag: tree
          };
          const options = {
            // Include only useful infos in each returned document
            projection: { _id: 0, arbotag: 1, x_lambda: 1, y_phi: 1, hauteur_totale: 1, nom_complet: 1, circonf: 1 },
          };
          const cursor = await collection.findOne(query, options);
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

//Get a user
const dbGetUser = (userId) =>{

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('playersTest');

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
const dbLogin = (userInfo) =>{

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('playersTest');

          const query = {username: userInfo};
          const options = {};
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


//Register
const dbRegister = (username, hash, userEmail, userColor) =>{

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    async function run() {
        try {
          await client.connect();
          const database = client.db('mwenbwa');
          const collection = database.collection('playersTest');

          const newUser = {
            username: username,
            password: hash,
            email: userEmail,
            color: userColor,

          };

          //const query = {username: userInfo};
          //const options = {};
          const cursor = await collection.insertOne(newUser);
          const result = ("done");

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
    dbGetTrees, dbGetUser, dbGetLeaderboard, dbGetLogs, dbLogin, dbGetTree, dbRegister
}