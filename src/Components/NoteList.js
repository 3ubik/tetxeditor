import AddNote from "./AddNote"
import Note from "./Note"

const NoteList = ({notes, handleAddNote, handleDeleteNote, onChange, changeTag}) => {
    return(
        <div className='notes-list'>
            {notes.map((note, index)=> 
            <Note 
                key = {note.id}
                id = {note.id} 
                tag = {note.tag}
                text = {note.text} 
                date = {note.date}
                handleDeleteNote={handleDeleteNote}
                onChange = {note => onChange(note, index)}
                changeTag = {changeTag}
            />
            )}
            <AddNote 
                handleAddNote={handleAddNote}
            />         
        </div>
    )
}
export default NoteList