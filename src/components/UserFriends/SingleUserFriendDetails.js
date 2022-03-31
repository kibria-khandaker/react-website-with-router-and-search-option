import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleUserFriendDetails = () => {
    // const params = useParams();
    const {bondhuId} = useParams();

    const [friend,setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${bondhuId}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))        
    },[])



    // console.log(bondhuId);
    return (
        <Container>
            <Row>
                <Col  md={4} className='mx-auto' >
                    <h4> Details of "{friend.name}" </h4>
                    <p>User Name: {friend.username}</p>
                    <p>Email: {friend.email}</p>
                    <p> <b>Address: </b>    
                        <small>City: {friend.address?.city}, </small>
                       <small>Street: {friend.address?.street}, </small>
                        <small>Suite: {friend.address?.suite}, </small>
                        <small>Zip Code: {friend.address?.zipcode}</small>
                    </p>
                    <p>
                        Geo Locatio: ( 
                        <small>
                            {friend.address?.geo?.lat} 
                            <b> and </b> 
                            {friend.address?.geo?.lng}
                        </small>)
                    </p>
                    <p>Company name: {friend.name?.company?.name}</p>
                    <p>Company Phrase: {friend.name?.company?.catchPhrase}</p>
                    <p>Company bs: {friend.name?.company?.bs}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleUserFriendDetails;