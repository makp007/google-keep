import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem([...addItem, note] );
    console.log(addNote);
  };
  const deleteNote = (id) => {
   setAddItem((preval) => 
    preval.filter((currData,index) =>{
      return index !==id
    })
   )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {
        addItem.map((val, i) => {
        return (
          <Note
            key={i} 
            id={i} 
            title={val.title}
            content={val.content} 
            deleteItem={deleteNote}
          />
        )
      })}
      <Footer />
    </>
  );
}

export default App;
