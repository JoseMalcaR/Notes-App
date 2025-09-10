import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  // Estado inicial cargado desde localStorage
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Agregar nueva nota
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Eliminar nota
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Marcar nota como importante
  const toggleImportant = (index) => {
    const updated = notes.map((note, i) =>
      i === index ? { ...note, important: !note.important } : note
    );
    setNotes(updated);
  };

  return (
    <div className="app">
      <h1>📒 Gestor de Notas</h1>
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        toggleImportant={toggleImportant}
      />
    </div>
  );
}

export default App;
