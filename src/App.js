import { useEffect, useState } from "react"
import NoteList from "./Components/NoteList"
import {nanoid} from 'nanoid'
import Search from "./Components/Search"
import Taglist from "./Components/TagList"



const App = () => {
  
const [notes, setNotes] = useState([])

const [searchTag, setSearchTag] = useState('')
const [tags, setTags] = useState([])

useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('rect--notes--app--data')
    )
    const savedTags = JSON.parse(
      localStorage.getItem('react--tags--app--data')
    )
  if(savedNotes){
    setNotes(savedNotes)
  }
  if(savedTags){
    setTags(savedTags)
  }

},[])

useEffect(()=>{
  localStorage.setItem(
    'rect--notes--app--data',
    JSON.stringify(notes)
  )
  localStorage.setItem(
    'react--tags--app--data',
    JSON.stringify(tags)
  )
  
},[notes,tags])

const addNote = (text) => {

  const isHash = text.split(' ').filter(
    (e)=>{
      if(e.includes('#') && e.length>1){
        return true
      }else{
        return false
      }
      
    }
    )

  const date = new Date()
  const newNote = {
    id: nanoid(),
    tag: isHash,
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]

  const newTag = isHash
  const newTags = [...new Set([...tags, ...newTag])]
 
  setNotes(newNotes)
  setTags(newTags)
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=>note.id !==id)
  setNotes(newNotes)
}

const handleChange = (e, index) => {
  const value = e.target.value
  const date = new Date()
  const isHash = value.split(' ').filter(
    (e)=>{
      if(e.includes('#') && e.length>1){
        return true
      }else{
        return false
      }
      
    }
    )
  setNotes(note => [
    ...note.slice(0, index),
    { ...note[index], text: value, tag: isHash, date: date.toLocaleDateString()  },
    ...note.slice(index + 1)
  ])
}

const changeTag = (tag)=>{
  if(!!tag){
    const newTag = tag
    const newTags = [...new Set([...tags, ...newTag])]
    setTags(newTags)
  }
}

const deleteTag = (tag) =>{
  const newTags = tags.filter((e)=> e !== tag)
  setTags(newTags)
}

const AddTag = (text) =>{
  if(!text.includes('#'))
  {
    const newTag = '#'+text
    const newTags = [...new Set([...tags, newTag])]
    setTags(newTags)
  }else{
    const newTag = text
    const newTags = [...new Set([...tags, newTag])]
    setTags(newTags)
  }
}

  return (
  <div className='container'>
    <Search handleSearchTag = {setSearchTag}/>
    <Taglist 
      tags = {tags}
      handleDeleteTag = {deleteTag}
      handleAddTag = {AddTag}
      />
    <NoteList 
      notes = {notes.filter((el)=>el.tag.toString().toLowerCase().includes(searchTag))} 
      handleAddNote = {addNote}
      handleDeleteNote = {deleteNote}
      onChange = {handleChange}
      changeTag = {changeTag}

    />

  </div>)
}

export default App