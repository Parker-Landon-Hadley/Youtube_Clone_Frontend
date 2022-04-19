import React, { useEffect, useState } from "react";
import axios from "axios";

const AddReplies = (props) => {
    console.log("replies", props)
    async function handleAddReplies (event) {
        event.preventDefault();
        console.log("New Reply", event.target.userName.value, event.target.userComment.value)
        let res = await axios.put(`http://localhost:3011/api/comments/${props.commentId}/newReply`, {
        name: event.target.userName.value,
        userComment: event.target.userComment.value,
        })
    };


    return (
        <div>       
            <form onSubmit={handleAddReplies}>
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
                placeholder="Reply..."
                />
                <button type="submit">Add Reply</button>
            </form>
                 </div>
    );
}

export default AddReplies;