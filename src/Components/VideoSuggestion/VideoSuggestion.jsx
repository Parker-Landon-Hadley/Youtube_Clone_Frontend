import React, { useState } from 'react';

const VideoSuggestion = (props) => {    
        
        function handleClick(event,relatedVid){
            event.preventDefault();
            props.videoIdSearch(relatedVid)
            console.log("hello")
        }


    return (  
        <div>
            { props.relatedVideoID.map((relatedVid) => {
                try{
                return <button type="button" onClick={(e) => handleClick(e, relatedVid)}><img id="ytplayer" SameSite='None' type="text/html"  src={`https://img.youtube.com/vi/${relatedVid}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button>
                }catch(error){
                    
                }
            
            
            })
            }
        </div>


        
    );
}
 
export default VideoSuggestion;