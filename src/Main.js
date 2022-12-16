import ReactMarkdown from 'react-markdown';

function Main({ activeNote, onUpdateNote }) {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }
    if(!activeNote) return < div className="no-active-note"> Click "ADD" to create and start editing a new note! </div>

    return (
        <div className="app-main" >

            <div className="app-main-note-edit" >

            <div className="app-search-body" >
                <div className="app-search-note-search" >
                <h1>Search a Note</h1>
                <input 
                    type="search" 
                    id="" 
                    value={(e) => e.target.value} 
                    onChange={""}
                                />
            </div>
        </div>

                <h1>Note Editor</h1>

            <input 
            type="text" 
            id="title" 
            value={activeNote.title} 
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
            />

            <textarea 
            id="body" 
            placeholder="Add a note here..." 
            value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}
            />

            </div>
                <div className="app-main-note-preview" >

                <h1 className="preview-title" >{activeNote.title}</h1>

                <ReactMarkdown className="markdown-preview" >{activeNote.body}</ReactMarkdown>

            </div>
        </div>
    )
}

export default Main;