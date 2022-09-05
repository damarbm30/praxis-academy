import React from "react";
import { useState } from "react";

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLength, setCharLength] = useState(50);

  const handleCharLength = () => {
    setCharLength(50 - title.length);
    console.log(charLength);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">Sisa karakter: {charLength}</p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Tuliskan judul di sini"
          onChange={(event) => setTitle(event.target.value)}
          onKeyUp={handleCharLength}
          value={title}
        />
        <textarea
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini"
          onChange={(event) => setBody(event.target.value)}
          value={body}
          required
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default NoteInput;
