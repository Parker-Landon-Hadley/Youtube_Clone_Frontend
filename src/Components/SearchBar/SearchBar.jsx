import axios from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./SearchBar.css";

const SearchBar = (props) => {
  const handleSearch = (event) =>{
    event.preventDefault();
  }
  const handleVideoSubmit = (event) => {
    event.preventDefault();
    props.setVideoSearch(event.target.searchInput.value);    
  }
    return (
      <div className="topnav">      
      <form onSubmit={handleVideoSubmit} className="topnav-centered">
      <input 
      id= "searchInput"
      type="text" 
      placeholder="Search.." 
      onChange={handleSearch}/>
      <button type="submit">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
        <FontAwesomeIcon className="yticon" icon={faYoutube}></FontAwesomeIcon>
    </form>      
      </div>        
    )
}
export default SearchBar