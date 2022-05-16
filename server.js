const port = 9001;
const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const skillController = require("./controller/skill.controller");

const heroController = require("./controller/hero.controller");

server.use(bodyParser.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "view");

server.use("/hero", heroController);
server.use("/skill", skillController);

server.use("/", (request, response) => {
    response.render('main')
});

server.listen(port, () => {
    console.log("server running on " + port);
});