import React, { useEffect, useState } from "react";
import axios from "axios";

const LikeDislike  = (props) => {
    console.log("like console", props)
    async function handleAddLike (event) {
        event.preventDefault();
        let res = await axios.put(`http://localhost:3011/api/comments/${props.commentId}/commentLike`) 
     console.log("like", res)
    };
    
    async function handleAddDislike (event) {
        event.preventDefault();
        let res = await axios.put(`http://localhost:3011/api/comments/${props.commentId}/commentDisLike`) 
     console.log("Dislike", res)

    };


   

    return ( 
        <div  className="likeDislike">
            <button onClick={event => handleAddLike(event)} type="submit">Like, {props.likes}</button>
            <button onClick={event => handleAddDislike(event)} type="submit">Dislike, {props.dislikes}</button>
            
        </div>
     );
}
 
export default LikeDislike;