import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleUserFriend = (props) => {
    const { name, username, email,id } = props.user;
    const navigate = useNavigate();
    const showUserDetail = () => {
        const path = `/bondhu/${id}`;
        navigate(path)
    }
    
    // NB: This SingleUserFriend is for only use for UserFriends Component Not use for Router
    
    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Bondhu er Id: {id} <br />
                        Bondhu er Name: {username} <br />
                        Bondhu er Email : {email}
                    </Card.Text>
                    {/* <Link to={'/bondhu/'+id}> Bondhu er Details </Link> <br /> */}
                    <Button onClick={showUserDetail} variant="primary"> Bondhu er Details </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleUserFriend;