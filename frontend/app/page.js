import NotesList from "./NotesList";

export default async function Home() {
  const response = await fetch("http://localhost:5000/api/notes");
  const notes = await response.json();

  return (
    <main>
      <h1>Quick Notes</h1>

      <h2>My Notes</h2>

      <NotesList initialNotes={notes} />
    </main>
  );
}