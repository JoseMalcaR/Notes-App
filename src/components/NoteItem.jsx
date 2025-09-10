function NoteItem({ note, deleteNote, toggleImportant }) {
  return (
    <div className={`note-item ${note.important ? "important" : ""}`}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="actions">
        <button onClick={toggleImportant}>
          {note.important ? "Quitar Importante" : "Marcar Importante"}
        </button>
        <button onClick={deleteNote}>Eliminar</button>
      </div>
    </div>
  );
}

export default NoteItem;
