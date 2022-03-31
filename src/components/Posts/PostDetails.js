import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId}=useParams();
    const [post,setPost]=useState({});
    
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])
    return (
        <div>
            <h5>Post Title:  {post.title}</h5>
            <p>Post Details {post.body}</p>      
        </div>
    );
};

export default PostDetails;