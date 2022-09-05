import React from "react";
import NoteSearch from "./NoteSearch";

export default function NoteHeader({ searchKey, searchInput, noteChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch searchKey={searchKey} searchInput={searchInput} noteChange={noteChange} />
      {/* <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan Anda"
          onKeyUp={noteChange}
          onChange={searchInput}
          value={searchKey}
        />
      </div> */}
    </div>
  );
}
