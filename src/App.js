import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Comments from "./Components/Comments/Comments";
<<<<<<< HEAD
import "bootswatch/dist/simplex/bootstrap.min.css";

// import VideoSuggestion from "./Components/VideoSuggestion/VideoSuggestion";
=======
import VideoSuggestion from "./Components/VideoSuggestion/VideoSuggestion";
>>>>>>> 8f0d6ff37412340f3599ff00eb611edc0e4e3023


export default function App() {

const [allComments, setAllComments] = useState([{}]);
const [relatedVideoId, setRelatedVideoId] = useState([]);
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
  relatedVideos(video.data.items[0].id.videoId)
}
const relatedVideos = async (searchString) => {
  
  let relatedVideo = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&type=video&key=${KEY}`
  );
  setRelatedVideoId(relatedVideo.data.items)
   
  } 
 useEffect(()=>{
  ytVideos();
},[videoSearch, setRelatedVideoId]);


return (
  <div className="App">
    <SearchBar setVideoSearch ={setVideoSearch}/>
    <div className="AppPage">
    <VideoPlayer videoData = {videoData}/>
<<<<<<< HEAD
    <Comments allComments = {allComments}
      commentsUrl="http://localhost:3011/api/comments"
      currentUserId="1"/>
=======
    <Comments allComments = {allComments}/>
    < VideoSuggestion relatedVideoId={relatedVideoId} />
    </div>
    </div>
)
>>>>>>> 8f0d6ff37412340f3599ff00eb611edc0e4e3023

};


 
  
  
  