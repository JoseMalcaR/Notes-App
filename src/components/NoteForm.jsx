import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addNote({
      title,
      content,
      important: false,
    });

    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la nota"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido de la nota"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Agregar Nota</button>
    </form>
  );
}

export default NoteForm;
