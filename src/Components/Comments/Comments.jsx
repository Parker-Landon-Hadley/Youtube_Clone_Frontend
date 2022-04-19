import React, { useEffect, useState } from "react";
import axios from "axios";
import Replies from "../Replies/Replies";
import AddReplies from "../Replies/AddReplies";
import LikeDislike from "../LikeDislike/LikeDislike";

const Comments = (props) => {
    

    async function handleAddComment (event) {
        event.preventDefault();
        console.log("New Comment", event.target.userName.value, event.target.userComment.value)
        let res = await axios.post("http://localhost:3011/api/comments", {
        name: event.target.userName.value,
        userComment: event.target.userComment.value,
        videoId: props.videoData,
        })
        props.getComments();    
        console.log(res)
    };


    return (  
        <div className="wrapper">
             <h3>Comment</h3>            
                {props.allComments.map((comment) => {
               console.log(props)
               return(                   
               <div className="comments">
                   <h3>{comment.name}</h3>                   
                   <p>{comment.userComment}</p>
                   <Replies replies = {comment.replies} commentId ={comment._id}/> 
                   <AddReplies  replies = {comment.replies} commentId ={comment._id}/>
                   <LikeDislike like = {comment.like} commentId ={comment._id} dislike = {comment.dislike}/>                   
                                            
               
                   </div>                
                   );                              
            }    
           )}

           <h2>Add Comment</h2>
            <form onSubmit={handleAddComment}>
                <input className="userName"
                type= 'text'
                name = 'userName'
                required = "required"
                placeholder="Name..."
                />
                <input className="userComment"
                type= 'text'
                name = 'userComment'
                required = "required"
                placeholder="Comment..."
                />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}           
export default Comments;