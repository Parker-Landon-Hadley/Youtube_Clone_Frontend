import axios from "axios";
import React, { useState } from "react";
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
<<<<<<< HEAD
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
=======
    <a class="navbar-brand" href="#">YouTube</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search"/>
>>>>>>> 170f3c792faa32e9b3202eab97c26233d5d000a3
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>
        
    )
}

export default SearchBar