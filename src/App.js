import React, {useState, useEffect} from 'react';
import uuid from "react-uuid";
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
// import Search from './Search';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  // const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:9292/notes")
  //    .then(res => res.json())
  //    .then(data => setNotes(data))
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
  // function onDeleteNote(id) {
  //   fetch(`http://localhost:9292/notes/${id}`, {
  //   method: "DELETE",
  //   })
  //   setNotes(notes.filter(note => note.id !== id))
  
  // }

  // const onHandleSave = (id) => {
  //   fetch(`http://localhost:9292/notes/${id}`, {
  //     method: "patch",
  //     headers: { 
  //       'content-type': 'application/json'
  //   },
  //     body: JSON.stringify({
  //       title: " ",
  //       content: " ",
  //     }
  //   )}
  //   )}



  const getActiveNote =  () => {
    return notes.find((note) => note.id === activeNote)
  }


  return (
    <div className="App">

      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote} 
      activeNote={activeNote} 
      setActiveNote={setActiveNote} 
      // onHandleSave={onHandleSave}
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
