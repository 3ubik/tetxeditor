import { MdSearch } from "react-icons/md"
import React from "react"

const Search = ({handleSearchTag}) => {
    return (<div className = 'search'> 
        <MdSearch className = 'search-icons' size = '1.3em'/>
        <input 
        onChange = {(e) => handleSearchTag(e.target.value)}
        type = 'text'
        placeholder = 'Search note for tag'
        /> 
    </div>)
}
export default Search