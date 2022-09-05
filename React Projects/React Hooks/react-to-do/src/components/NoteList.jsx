import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ todos, formatDate, onDelete }) => {
  return (
    <div className="notes-list">
      {todos.map((todo) => (
        <NoteItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          body={todo.body}
          date={todo.createdAt}
          formatDate={formatDate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;
