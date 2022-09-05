import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ datas, dateConvert, onDelete }) {
  return (
    <div className="notes-list">
      {datas.map((data) => (
        <NoteItem
          key={data.id}
          id={data.id}
          title={data.title}
          date={data.createdAt}
          body={data.body}
          dateConvert={dateConvert}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
