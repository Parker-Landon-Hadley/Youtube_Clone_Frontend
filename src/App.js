import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Comments from "./Components/Comments/Comments";
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

async function ytVideos(){
  const video = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoSearch}&key=${KEY}`);
  console.log(video.data.items[0].id.videoId);
  setVideoData(video.data.items[0].id.videoId)
  
  
}

useEffect(()=>{
  ytVideos();
},[videoSearch]);

return (
  <div className="App">
    <SearchBar setVideoSearch ={setVideoSearch}/>
    <VideoPlayer videoData = {videoData}/>
    <Comments allComments = {allComments}/>


  </div>
)
}

export default App;
