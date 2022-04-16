import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Comments from "./Components/Comments/Comments";
import VideoSuggestion from "./Components/VideoSuggestion/VideoSuggestion";


export default function App() {

const [allComments, setAllComments] = useState([{}]);
const [relatedVideoId, setRelatedVideoId] = useState([]);
const [videoSearch, setVideoSearch] = useState("");
const [videoData, setVideoData] = useState("");
const KEY = "AIzaSyAA-ojqdg9aigtdPhWZh9edreznNTNlDhU";



async function getComments(){
  let comment = await axios.get(`http://localhost:3011/api/comments/${videoData}`);

  console.log("console log 3", comment.data);
  setAllComments(comment.data)
}
useEffect(()=>{
  ytVideos();
},[setAllComments])


async function ytVideos(){
  const video = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoSearch}&key=${KEY}`);
  console.log("Console log 1", video.data.items[0].id.videoId);
  setVideoData(video.data.items[0].id.videoId)
  relatedVideos(video.data.items[0].id.videoId)
}
const relatedVideos = async (searchString) => {
  
  let relatedVideo = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&type=video&key=${KEY}`
  );
  console.log('console 2', relatedVideo.data.items)
  setRelatedVideoId(relatedVideo.data.items)
   
  } 
 useEffect(()=>{
  ytVideos();
  getComments();
},[videoSearch, setRelatedVideoId]);


return (
<div>
    <SearchBar setVideoSearch ={setVideoSearch}/>
    <VideoPlayer videoData = {videoData}/>
    < VideoSuggestion relatedVideoId={relatedVideoId} setVideoSearch ={setVideoSearch} />
    <Comments allComments = {allComments} videoData = {videoData} getComments = {getComments}/>

    </div>
)

};


 
  
  
  