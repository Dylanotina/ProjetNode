const express = require("express");

const bodyParser = require("body-parser");
const fs = require("fs");

const database = require("./config/dbconfig");
const cors = require("cors");

//database.init();

const server = express();

server.use(cors());

/* Express configuration */
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

/* Router configuration */
const REST_API_ROOT = "/api";
server.use(REST_API_ROOT, require("./routes/router"));

server.use("/static", express.static("static"));

if (process.env.NODE_ENV === "production") {
  server.use(express.static(__dirname + "/build/"));

  server.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
}
server.get("/endpoint", (req, res) => {
  res.redirect(REST_API_ROOT + "/activite/recuperer");
});

server.listen(4001, err => {
  if (err) throw err;
  console.log("> Ready on http://localhost:4001");
});
