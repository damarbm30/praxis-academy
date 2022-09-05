import React, { Component } from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import { initialData, showFormattedDate } from "../utils/data";
import NoteHeader from "./NoteHeader";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteData: initialData,
      searchKey: "",
    };

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearchResult = this.handleSearchResult.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleRestoreNote = this.handleRestoreNote.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleAddNote({ title, body }) {
    this.setState((previousState) => {
      return {
        noteData: [
          ...previousState.noteData,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  handleDelete(id) {
    const noteData = this.state.noteData.filter((data) => data.id !== id);
    this.setState({ noteData });
  }

  handleSearchInput(event) {
    this.setState(() => {
      return {
        searchKey: event.target.value,
      };
    });
  }

  handleSearchResult() {
    if (this.state.searchKey) {
      const noteData = this.state.noteData.filter((data) =>
        data.title.toLowerCase().includes(this.state.searchKey.toLowerCase().trim())
      );
      this.setState({ noteData });
    }
  }

  handleRestoreNote() {
    if (this.state.searchKey === "") {
      this.setState(() => {
        return {
          noteData: initialData,
        };
      });
    }
  }

  handleNoteChange() {
    this.handleRestoreNote();
    this.handleSearchResult();
  }

  render() {
    return (
      <>
        <NoteHeader
          noteChange={this.handleNoteChange}
          searchKey={this.state.searchKey}
          searchInput={this.handleSearchInput}
        />
        <div className="note-app__body">
          <NoteInput addNote={this.handleAddNote} />
          <h2>Catatan Aktif</h2>
          {!this.state.noteData.length ? (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          ) : (
            <NotesList datas={this.state.noteData} dateConvert={showFormattedDate} onDelete={this.handleDelete} />
          )}
        </div>
      </>
    );
  }
}
