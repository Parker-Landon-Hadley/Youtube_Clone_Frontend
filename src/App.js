import react from "react";
import axios from "axios";

function App() {
const [allComments, setAllComments] = useState([{}]);
async function getComments(){
  let comment = await axios.get("http://localhost:3011/api/comments");

console.log(comment.data);
setAllComments(comment.data)
}
}

export default App;

return (
  <div className="App">

  </div>
)