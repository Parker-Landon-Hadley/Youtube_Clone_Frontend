import React, { useEffect, useState } from "react";



function VideoPlayer(props) {

    props.videoData.items.videoId
    
return(
    <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src= ""
        frameBorder="0"
      ></iframe>

)
};
export default VideoPlayer