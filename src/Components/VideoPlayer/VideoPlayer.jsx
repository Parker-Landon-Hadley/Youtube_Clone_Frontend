import React, { useState } from "react";



function VideoPlayer(props) {

  let videoURL = `https://www.youtube.com/embed/${props.videoData}?autoplay=1`
    
return (
  <div>
<iframe 
id="ytplayer" 
type="text/html" 
width="640"
 height="360"
src= {videoURL}
frameborder="0"></iframe>
  </div>

  );
};
export default VideoPlayer