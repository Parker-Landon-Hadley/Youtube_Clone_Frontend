 import React, { useEffect, useState } from "react";
import axios from "axios";

const Replies = (props) => {


    return (
        <div>
        {props.replies && props.replies.map((reply)=>{
            return(
                <div className="replies">                          
                    <p>{reply.userComment}</p>
                 </div>
            );
        })
       } 
       </div>
    )

}
 
export default Replies;