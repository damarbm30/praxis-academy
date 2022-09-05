import React from "react";

export default function NoteSearch({ searchKey, searchInput, noteChange }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan Anda"
        onKeyUp={noteChange}
        onChange={searchInput}
        value={searchKey}
      />
    </div>
  );
}
