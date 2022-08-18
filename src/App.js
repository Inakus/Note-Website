import { useState } from "react";
import Navbar from "./components/Navbar";
import Note from "./components/Note";
import TextForm from "./components/TextForm";

function App() {
  const [note, setNote] = useState([]);

  function createNote(content, date) {
    setNote((res) => {
      return [...res, { Date: date, Content: content }];
    });
  }

  return (
    <>
      <Navbar />
      <TextForm createNote={createNote} />
      {note.map((item, index) => {
        return <Note key={index} date={item.Date} content={item.Content} />;
      })}
    </>
  );
}

export default App;
