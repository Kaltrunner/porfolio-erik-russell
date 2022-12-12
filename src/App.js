import React, {useState, useEffect} from 'react';
import uuid from "react-uuid";
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
// import Search from './Search';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("")

  // useEffect(() => {
  //   fetch("")
  //    .then(res => res.json())
  //    .then(data => console.log(data))
  // },[])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: " ",
      body: " ",
      lastModified: Date.now(),
    }
    setNotes([newNote, ...notes]);
  }

  const onUpdateNote = (onUpdateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return onUpdateNote;
      }
      return note;
    })
    setNotes(updatedNotesArray);
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const getActiveNote =  () => {
    return notes.find((note) => note.id === activeNote)
  }

  // const onSearchTerm = () => {

  // }

  return (
    <div className="App">

      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote} 
      activeNote={activeNote} 
      setActiveNote={setActiveNote} 
      />

      {/* <Search /> */}

      <Main 
      activeNote={getActiveNote()} 
      onUpdateNote={onUpdateNote}
      />

    </div>
  );
}

export default App;
