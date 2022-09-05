import React, { Component } from "react";

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLeft: 50,
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputCharCount = this.handleInputCharCount.bind(this);
  }

  handleInputCharCount(event) {
    this.setState(() => {
      return {
        charLeft: 50 - event.target.value.length,
      };
    });
  }

  handleTitle(event) {
    if (event.target.value.length >= 50) {
      alert("Title length reaches 50 characters");
    }
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  handleBody(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.handleSubmit}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.charLeft}</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Tuliskan judul di sini"
            onChange={this.handleTitle}
            onKeyUp={this.handleInputCharCount}
            value={this.state.title}
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini"
            onChange={this.handleBody}
            value={this.state.body}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
