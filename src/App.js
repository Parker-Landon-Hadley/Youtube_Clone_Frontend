import react from "react";
import axios from "axios";

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
    
  </div>
)
}

export default App;
