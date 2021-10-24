import React, { useState } from "react"

const AddTag = ({handleAddTag}) => {

    const [isAdding, setIsAdding] = useState(false)
    const [tagText, setTagText] = useState('')
    const characterLimit = 10;

    const handleClick = () => {
        setIsAdding(true)
    }

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setTagText(event.target.value)
        }
    }

    const handleSaveTag = () => {
        if(tagText.trim().length > 0){
            handleAddTag(tagText)
            setTagText('')
        }
    }

    return (
        <>
        {isAdding ? (
            <div className='tag new'>
            <input className='tag-list-input'
                autoFocus
                value = {tagText}
                onChange = {handleChange}
                type='text'
            />
            <button className='save' onClick={()=>{handleSaveTag(); setIsAdding(false)}}>Save</button>
            </div>
        ):(
            <button className='tag-list-add' onClick={handleClick}>Add tag</button>
        )}
        
        </>
    )
}
export default AddTag