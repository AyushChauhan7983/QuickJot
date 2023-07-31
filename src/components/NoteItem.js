import { useContext } from "react";
import React from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div>
      <div className="col-md-3">
        <div className="card my-3 shadow mb-5 bg-white rounded">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <i
                className="fa-solid fa-trash mx-2 mb-1"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note Deleted successfully", "success");
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2 mb-1"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
