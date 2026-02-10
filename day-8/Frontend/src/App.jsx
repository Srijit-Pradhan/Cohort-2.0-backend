import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([
    { title: "test title 1", description: "test description" },
    { title: "test title 2", description: "test description" },
    { title: "test title 3", description: "test description" },
    { title: "test title 4", description: "test description" },
  ]);

  axios.get("http://localhost:3000/api/notes").then((res) => {
    setNotes(res.data.notes);
  });

  return (
    <>
      <div className="notes">
        {notes.map(function (elem) {
          return (
            <div className="note">
              <h1>{elem.title}</h1>
              <p>{elem.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
