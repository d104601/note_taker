const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//return the "notes.html"
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


app.get("/api/notes", (req, res) => {
    return res.json(database);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

    
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);