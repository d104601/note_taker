const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");
const uuid = require("uuid");

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
    return res.json(db);
});

app.post("/api/notes", (req, res) => {
    let {title, text} = req.body;
    let id = uuid.v4();
    let note = {
        title,
        text,
        id
    }

    db.push(note);

    fs.writeFile("db/db.json", JSON.stringify(db, "\t"), (err) => {
        if (err)
        { throw err; }
        res.json(db);
    });
});

app.delete("/api/notes/:id", (req, res) =>{
    db.splice(req.params.id, 1);

    fs.writeFile("db/db.json", JSON.stringify(db, "\t"), (err) => {
        if (err)
        { throw err; }
        res.json(db);
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

    
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);