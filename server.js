const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//return the "notes.html"
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")));

//return the "index.html"
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));


app.route("/api/notes")
    .get(function(req, res) {
        res.json(db);
    })
    // note posting
    .post(function(req, res) {
        let jsonPath = path.join(__dirname, "db/db.json");
        let newNote = req.body;

        db.push(newNote);

        fs.writeFile("db/db.json", db, (err) =>{
            if(err)
            {
                throw err;
            }
            console.log("Note saved.");
        })
    });

    
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);