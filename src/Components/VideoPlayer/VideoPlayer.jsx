import React, { useEffect, useState } from "react";



function VideoPlayer(props) {
    
return(
    <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/Ox27mkMB3ts"}
        frameBorder="0"
      ></iframe>

)
};
export default VideoPlayer