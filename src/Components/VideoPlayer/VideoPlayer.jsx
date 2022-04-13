import React, { useState } from "react";



<<<<<<< HEAD
function VideoPlayer(props) {

    props.videoData.items.videoId
=======
const VideoPlayer = (props) => {
>>>>>>> 170f3c792faa32e9b3202eab97c26233d5d000a3
    
return (
  <div>
    <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
<<<<<<< HEAD
        src= ""
=======
        src={`https://www.youtube.com/embed/${props.videoId}`}
>>>>>>> 170f3c792faa32e9b3202eab97c26233d5d000a3
        frameBorder="0"
      ></iframe>
  </div>

  );
};
export default VideoPlayer