
function Search() {
    return (
        <div className="app-search-body" >
            {/* <div className="app-search-note-search" >
            <h1>Search a Note</h1>
            <input 
            type="search" 
            id="" 
            value={(e) => e.target.value} 
            onChange={""}
            />
            </div> */}



function onAddNote(newNote)  {
    fetch("http://localhost:9292/notes", {
      method: "POST",
      headers: { 
        'content-type': 'application/json' 
      },
      body: JSON.stringify({
        title : " ",
        content: " ",
      })
    })
      .then(res => res.json())
      .then(setNotes([newNote, ...notes]))
}
        </div>
    )
}

export default Search;