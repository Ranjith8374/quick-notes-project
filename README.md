# Quick Notes API

A simple full-stack Notes application built using Next.js and Node.js with Express.

## Features

- Create a new note
- View all notes
- Delete a note
- REST API communication
- Server Component for initial data fetching
- Client Components for interaction
- React useState for managing notes

## Technologies Used

### Frontend
- Next.js
- React
- JavaScript
- CSS
- Next.js App Router

### Backend
- Node.js
- Express.js
- REST API
- CORS

### Storage
- JSON file (`notes.json`)

## Project Structure

```text
quick-notes-project
│
├── backend
│   ├── index.js
│   ├── notes.json
│   ├── package.json
│   └── package-lock.json
│
└── frontend
    ├── app
    │   ├── page.js
    │   ├── NotesList.jsx
    │   ├── NoteCard.jsx
    │   ├── CreateNoteForm.jsx
    │   └── globals.css
    └── package.json