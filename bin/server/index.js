"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  APP_PORT
} = process.env;
const app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));

const bcrypt = require("bcrypt");

const saltRounds = 10;

const hash = pwd => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {});
  });
};

const dbCalls = require('./dbCalls');

app.post("/test", (req, res) => {
  console.log(req);
  res.statusCode = 512;
  res.json({
    test: 1
  });
});
app.get("/trees", async (req, res) => {
  res.send(await dbCalls.dbGetTrees());
});
app.get("/user", (req, res) => {
  const userId = req.param("id");
});
app.get("/leaderboard", (req, res) => {});
app.get("/logs", (req, res) => {
  const userId = req.param("id");
});
app.post("/login", (req, res) => {
  const user = req.param("user");
  const pwd = req.param("pwd");
});
app.post("/register", (req, res) => {
  const userId = req.param("user");
  const userPassword = req.param("password");
  const userEmail = req.param("email");
  const userColor = req.param("color");
});
app.post("/buyTree", (req, res) => {});
app.post("/lockTree", (req, res) => {});
app.post("/comment", (req, res) => {});
app.post("/changeColor", (req, res) => {});
app.post("/changeMailAdress", (req, res) => {});
app.post("/changeUsername", (req, res) => {});
app.post("/changePassword", (req, res) => {});
app.post("/changeProfilePic", (req, res) => {});
app.listen(APP_PORT, () => console.log(`🚀 Server is listening on port ${APP_PORT}.`));
//# sourceMappingURL=index.js.map