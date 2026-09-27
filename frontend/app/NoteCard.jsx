"use client";

export default function NoteCard({ note, onDelete }) {
  const handleDelete = async () => {
    await fetch(`http://localhost:5000/api/notes/${note.id}`, {
      method: "DELETE",
    });

    onDelete(note.id);
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}