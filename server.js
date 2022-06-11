const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//return the "notes.html"
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")));

//return the "index.html"
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));


app.route("/api/notes")
    .get(function(req, res) {
        res.json("./db/db.json");
    })
    // note posting
    .post(function(req, res) {});



app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);