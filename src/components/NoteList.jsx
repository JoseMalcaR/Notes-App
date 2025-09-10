import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, toggleImportant }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No hay notas aún ✍️</p>
      ) : (
        notes.map((note, index) => (
          <NoteItem
            key={index}
            note={note}
            deleteNote={() => deleteNote(index)}
            toggleImportant={() => toggleImportant(index)}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
