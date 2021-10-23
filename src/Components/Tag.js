import React from "react"
import {TiDeleteOutline} from 'react-icons/ti'


const Tag = ({tag, handleDeleteTag}) => {
    
    return (<div className='tag'>
        <small>{tag}</small>
        <TiDeleteOutline 
            onClick = {()=>handleDeleteTag(tag)}
            className='tag-delete-icon' 
            size='1.5em'/>
    </div>)
}
export default Tag