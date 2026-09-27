"use client";

import { useState } from "react";
import NoteCard from "./NoteCard";
import CreateNoteForm from "./CreateNoteForm";

export default function NotesList({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleNoteCreated = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <CreateNoteForm onNoteCreated={handleNoteCreated} />

      <h2>My Notes</h2>

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}