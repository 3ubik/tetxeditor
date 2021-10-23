import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import { useState } from 'react'

const Note = ({id,text,date, tag, handleDeleteNote, onChange, changeTag}) => {

    const [isEditing, setIsEditing] = useState(false)
   
    return(
        
        <div className='note'>
            {isEditing ? (
                <>
                <button className='save' onClick={()=>{changeTag(tag) 
                    return setIsEditing(false)}}>Save</button>             
                 <textarea className = 'edit-note'
                 autoFocus
                 rows='8' 
                 cols='10'
                 value = {text}
                 onChange = {onChange}
                 type = 'text'
                 />
                 </>
                
                
            ):(
                <span >{text}</span>
            )}
           
            <div className = 'note-footer'>
                <small>{date}</small>
                <small>Tag:{tag}</small>
                <AiFillEdit 
                    onClick={()=> setIsEditing(true)}
                    className = 'edit-icon' 
                    size = '1.3em'/>
                <MdDeleteForever 
                    onClick={()=>handleDeleteNote(id)} 
                    className='delete-icon' 
                    size='1.3em'/>
            </div>
        </div>
    )
}
export default Note