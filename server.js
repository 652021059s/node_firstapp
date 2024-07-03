const express = require("express");
const users = require('./db.json');
const app = express(); 
const port = process.env.PORT || 3200; 

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

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
app.post('/api/users', (req, res) => { 

    users.push(req.body);

    let json = req.body ;
   console.log(json);
   res.send("Username:" +json.username +"inserted.");


});
app.put('/api/users/:id', (req, res) => {

    const updateIndex = users.findIndex(user => user.id ===
 Number(req.params.id)) 
 
     res.send(`Update user id: '${users[updateIndex].id}' completed.`)
 
 })
 app.delete('/users/:id', (req, res) => {

    const deletedIndex = users.findIndex(user => user.id ===
 Number(req.params.id)) 
 
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
 
 });