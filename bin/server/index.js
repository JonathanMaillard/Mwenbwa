"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://dev:shrek55@smaragdencluster.jzsi8.mongodb.net/mwenbwa?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  console.log(err);
  const collection = client.db("mwenbwa");
  client.close();
});
const {
  APP_PORT
} = process.env;
const app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.get("/hello", (req, res) => {
  console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
  res.send("Hello, World!");
});
app.listen(APP_PORT, () => console.log(`🚀 Server is listening on port ${APP_PORT}.`));
app.get("/get-trees", (req, res) => {
  console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
  let resultArray = [];
  client.connect(err => {
    console.log(err);
    const collection = client.db("mwenbwa");
    let cursor = collection.collection("trees").find();
    console.log(cursor);
    cursor.forEach(function (doc, err) {
      console.error("error : " + err);
      console.log("doc : " + doc);
      resultArray.push(doc);
    }, function () {
      res.send(resultArray);
      client.close();
    });
  });
});
//# sourceMappingURL=index.js.map