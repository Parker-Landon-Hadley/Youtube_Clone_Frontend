import react, {useState} from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {

const [allComments, setAllComments] = useState([{}]);
const KEY = "AIzaSyCWTfthdoWijFdAAnpJbxdVJbXvBVqZirU";

async function getComments(){
  let comment = await axios.get("http://localhost:3011/api/comments");

  console.log(comment.data);
  setAllComments(comment.data)
}

return (
  <div className="App">
    <SearchBar/>
    <VideoPlayer/>
  </div>
)
}

export default App;
