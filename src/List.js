import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'Name: whatever',
            body:
                'Role: whatever',
            body2: 'Email: whatever'
        }
    ]);
    const addNewNote = note => {
        const newNote = {
            id: Date.now(),
            title: note.title,
            body: note.body
        };
        setNotes([...notes, newNote]);
    };
    return (
        <div className="App">
            <h1>My Notes</h1>
            <NoteForm addNewNote={addNewNote} />
            <Notes notes={notes} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
