import React, { useState } from "react";
import "./VideoPlayer.css"



function VideoPlayer(props) {

  let videoURL = `https://www.youtube.com/embed/${props.videoData}?autoplay=1`
    
return (
 <div className="main-content">
  <div className="container">
<iframe 
className="resp-iframe"
src= {videoURL}></iframe>
  </div>
</div>
  );
};
export default VideoPlayer