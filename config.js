const { Module } = require("module");
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mobile_legend"
});

conn.connect((error) => {
    if (error) console.log('database error!');
    console.log("database connected!");
});

module.exports = conn;