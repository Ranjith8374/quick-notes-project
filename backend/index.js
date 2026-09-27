const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Quick Notes API is running");
});

// GET all notes
app.get("/api/notes", (req, res) => {
    const data = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(data);

    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// POST a new note
app.post("/api/notes", (req, res) => {
    const data = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(data);

    const newNote = {
        id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1,
        title: req.body.title,
        content: req.body.content
    };

    notes.push(newNote);

    fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));

    res.status(201).json(newNote);
});
// DELETE a note
app.delete("/api/notes/:id", (req, res) => {
    const data = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(data);

    const id = Number(req.params.id);

    const updatedNotes = notes.filter(note => note.id !== id);

    if (updatedNotes.length === notes.length) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    fs.writeFileSync(
        "notes.json",
        JSON.stringify(updatedNotes, null, 2)
    );

    res.json({
        message: "Note deleted successfully"
    });
});