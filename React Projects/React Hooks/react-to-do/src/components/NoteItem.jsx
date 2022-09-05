import React from "react";
import DeleteButton from "./DeleteButton";

const NoteItem = ({ id, title, body, date, formatDate, onDelete }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formatDate(date)}</p>
        <p className="note-item__dbody">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton onDelete={onDelete} id={id} />
      </div>
    </div>
  );
};

export default NoteItem;
