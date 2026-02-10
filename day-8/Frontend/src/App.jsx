import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handlerSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        // console.log(res.data);
        e.target.reset();
        fetchNotes();
      });
  }

  function deleteHandler(noteid) {
    axios.delete("http://localhost:3000/api/notes/" + noteid).then((res) => {
      // console.log(res.data);
      fetchNotes();
    });
  }

  function updateHandler(noteid, oldTitle, oldDescription) {
    const newTitle = prompt("Enter new title", oldTitle);
    const newDescription = prompt("Enter new description", oldDescription);

    axios
      .patch("http://localhost:3000/api/notes/" + noteid, {
        title: newTitle,
        description: newDescription,
      })
      .then((res) => {
        fetchNotes();
      });
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input name="title" type="text" placeholder="Title" />
        <input name="description" type="text" placeholder="Description" />
        <button>Add Note</button>
      </form>
      <div className="notes">
        {notes.map(function (elem, key) {
          return (
            <div key={key} className="note">
              <h1>{elem.title}</h1>
              <p>{elem.description}</p>
              <button
                onClick={() => {
                  deleteHandler(elem._id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  updateHandler(elem._id, elem.title, elem.description);
                }}
              >
                update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
