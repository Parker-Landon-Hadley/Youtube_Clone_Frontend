import React, { useState } from 'react';
import './VideoSuggestion.css'




const VideoSuggestion = (props) => {
  

    function handleClick(event, relatedVideo) {
        event.preventDefault();
        props.setVideoData(relatedVideo);
        props.setRelatedVideo(relatedVideo);
        
        console.log('hello');
    }

    return (
    <div>
      <table>
          <thead>
              <tr>
                  <th>
                      Related Videos
                  </th>
              </tr>
          </thead>
          <tbody>
        {props.relatedVideoId.map((relatedVideo) => {
          try {
            return (
                <tr>
                    <td>
              <button className="btn btn-outline-danger border border-dark border-2" type="button" onClick={handleClick}>
                <img
                  id="ytplayer"
                  SameSite="None"
                  type="text/html"
                  src={`https://img.youtube.com/vi/${relatedVideo.id.videoId}/default.jpg`}
                  alt="./Sad.png"
                  frameBorder="0"
                />
              </button>
              </td>
              </tr>
            );
          } catch (error) {}
        })}
        </tbody>
        
      </table>
    </div>
  );
};

export default VideoSuggestion;