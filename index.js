const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./lib/db.config.js");
const cors = require("cors");
var http = require("http");
var db = require("./models/index");
const PORT = 8000;
var myUrlLogger = (upperCase) => {
  if (typeof uppercase !== "boolean") {
    upperCase = true;
  }

  return (req, res, next) => {
    console.log(
      "Logging:",
      upperCase ? req.url.toUpperCase() : req.url.toLowerCase()
    );

    next();
  };
};
app.use(myUrlLogger(false));
app.use(bodyParser.json());
app.use(cors());
db.sequelize.sync({alter: false});
const router = require("./routes/router.js");
app.use("/api", router);

app.get("/", (req, res) => {
  res.send({
    status: "online",
  });
});
var httpServer = http.createServer(app);


httpServer.listen(PORT);
