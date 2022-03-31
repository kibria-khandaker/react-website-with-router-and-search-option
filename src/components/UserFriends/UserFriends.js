import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleUserFriend from './SingleUserFriend';

const UserFriends = () => {

    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        
    },[])

    // NB: er Router link er code kora hoyche SingleUserFriend component e ( jekhane er map er element use korechi by props er diya )

    return (
        <Container>
            <Row className='text-center'>
                <h1> Welcome to Bondhugon er List </h1>
                <h4>Here our {users.length} Friends list Showing </h4>
            </Row>
            <Row xs={1} md={3} className="g-4 mt-4">
                {
                    users.map(user =><SingleUserFriend 
                        key={user.id} 
                        user={user} 
                        ></SingleUserFriend>)
                }
            </Row>
        </Container>
    );
};

export default UserFriends;