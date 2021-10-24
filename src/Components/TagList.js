import React from "react"
import AddTag from "./AddTag"
import Tag from "./Tag"

const Taglist = ({tags, handleDeleteTag, handleAddTag}) => {
    
    return (
    <div className = 'tag-list'>
        {tags.map((tag, index)=>
            <Tag
            key = {index}
            tag = {tag}
            handleDeleteTag = {handleDeleteTag}
        />
        )}
        <AddTag handleAddTag={handleAddTag}/>
    
    </div>
    )
}

export default Taglist