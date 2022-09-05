import React, { useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { initialData, showFormattedDate } from "../utils/data";

const NoteApp = () => {
  let [note, setNote] = useState(initialData);

  const handleDelete = (id) => {
    note = note.filter((todo) => todo.id !== id);
    setNote(note);
  };

  const handleAddNote = ({ title, body }) => {
    setNote([
      ...note,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: +new Date(),
      },
    ]);
  };

  return (
    <>
      <NoteHeader />
      <div className="note-app__body">
        <NoteInput addNote={handleAddNote} />
        <h2>Catatan Aktif</h2>
        {!note.length ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          <NoteList todos={note} formatDate={showFormattedDate} onDelete={handleDelete} />
        )}
      </div>
    </>
  );
};

export default NoteApp;
