const express = require("express");
const users = require('./db.json');
const app = express(); 
const port = process.env.PORT || 3200; 
app.get('/api/users', (req, res) => {
    res.json(users)
 
 });

 app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)))
 
 });














app.get("/fluk", (req, res) => { res.send("Hello! My Name is 652021059 Papangkorn saeoueng ");});
app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" +port);
    console.log("Starting node.js at http://127.0.0.1:" +port+"/api/users");
});