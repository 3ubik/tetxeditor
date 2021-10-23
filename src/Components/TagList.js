import React from "react"
import Tag from "./Tag"
import {nanoid} from 'nanoid'

const Taglist = ({tags, handleDeleteTag}) => {
    
    return (
    
        

    <div className = 'tag-list'>
        <button className='tag-list-add'>Add tag</button>
        {tags.map((tag, index)=>
            <Tag
            key = {index}
            tag = {tag}
            handleDeleteTag = {handleDeleteTag}
        />
        )}
        
    </div>
    )
}

export default Taglist