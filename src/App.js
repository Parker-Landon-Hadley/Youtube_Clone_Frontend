import React, {useState, useEffect} from "react";
import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Comments from "./Components/Comments/Comments";
import "bootswatch/dist/simplex/bootstrap.min.css";
// import VideoSuggestion from "./Components/VideoSuggestion/VideoSuggestion";

function App() {

const [allComments, setAllComments] = useState([{}]);
const [videoSearch, setVideoSearch] = useState("");
const [videoData, setVideoData] = useState("");
const KEY = "AIzaSyCWTfthdoWijFdAAnpJbxdVJbXvBVqZirU";



async function getComments(){
  let comment = await axios.get("http://localhost:3011/api/comments");

  console.log(comment.data);
  setAllComments(comment.data)
}

function videoSearch(text) {
  async function searchedVideos(){
    let videos = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)

    
  }


}

useEffect(()=>{
  ytVideos();
},[]);

return (
  <div className="App">
    <SearchBar/>
    <VideoPlayer/>
    <Comments/>
    {/* <VideoSuggestion/> */}
  </div>
)
}

export default App;
