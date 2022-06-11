const express = require('express');
const fs = require('fs');
const path = require('path');
const dbFile = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//return the "notes.html"
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")));

//return the "index.html"
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));

app.get("/api/notes", (req, res) => {
    console.log(`${req.method} request recieved to get a note`);
    return res.json(dbFile);
});
    
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);