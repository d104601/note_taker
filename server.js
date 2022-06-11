const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

//return the "notes.html"
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")));

//return the "index.html"
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));

app.get("/api/notes", (req, res) => )

// note posting
app.post();

app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);