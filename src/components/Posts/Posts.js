import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link,Outlet } from 'react-router-dom';
// import SinglePostComponent from './SinglePostComponent';

const Posts = () => {

    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    
    return (

        <Container>
            <Row className='text-center'>
                <h1> Welcome to Posts page </h1>
                <h4>Here our {posts.length} Posts list Showing </h4>
                <Outlet />
                <div>
                {
                    posts.map(post =><Link 
                        key={post.id}
                        to={`/posts/${post.id}`}
                        >{post.id}</Link>)
                }
                
                </div>


            </Row>
            {/* <Row xs={1} md={3} className="g-4 mt-4">             
                {
                    posts.map(post =><SinglePostComponent 
                        key={post.id} 
                        post={post} 
                        ></SinglePostComponent>)
                }
            </Row> */}
        </Container>

    );
};

export default Posts;