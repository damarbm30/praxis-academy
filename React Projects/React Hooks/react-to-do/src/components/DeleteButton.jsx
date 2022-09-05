import React from "react";

const DeleteButton = ({ onDelete, id }) => {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
};

export default DeleteButton;
