import React, {useState, useEffect} from "react";
import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
<<<<<<< HEAD
import SearchBar from "./Components/SearchBar/SearchBar";
import Comments from "./Components/Comments/Comments";
=======
import Comments from "./Components/Comments/Comments";
// import VideoSuggestion from "./Components/VideoSuggestion/VideoSuggestion";
>>>>>>> 170f3c792faa32e9b3202eab97c26233d5d000a3

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

<<<<<<< HEAD
async function ytVideos(){
  const video = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoSearch}&key=${KEY}`);
  console.log(video.data);
  setVideoData(video.data)
=======
function videoSearch(text) {
  async function searchedVideos(){
    let videos = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)

    
  }


>>>>>>> 170f3c792faa32e9b3202eab97c26233d5d000a3
}

useEffect(()=>{
  ytVideos();
},[]);

return (
  <div className="App">
<<<<<<< HEAD
    <SearchBar setVideoSearch ={setVideoSearch}/>
    <VideoPlayer videoData = {videoData}/>
    <Comments allComments = {allComments}/>


=======
    <SearchBar/>
    <VideoPlayer/>
    <Comments/>
    {/* <VideoSuggestion/> */}
>>>>>>> 170f3c792faa32e9b3202eab97c26233d5d000a3
  </div>
)
}

export default App;
