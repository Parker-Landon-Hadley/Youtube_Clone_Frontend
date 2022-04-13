import axios from "axios";
import React, {useState} from "react";
import "bootswatch/dist/simplex/bootstrap.min.css";

const SearchBar = (props) => {

  

  const handleSearch = (event) =>{
    event.preventDefault();
  }

  const handleVideoSubmit = (event) => {
    event.preventDefault();
    props.setVideoSearch(event.target.searchInput.value);
    
  }



    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Youtube!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <form onSubmit={handleVideoSubmit} class="searchBar">
        <input class="form-control me-sm-2" 
        id="searchInput"
        type="text"        
        placeholder="Search" 
        onChange={handleSearch}/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>
        
    )
}

export default SearchBar