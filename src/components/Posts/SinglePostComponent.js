import React from 'react';
import { Col,Card,Button } from 'react-bootstrap';

const SinglePostComponent = (props) => {
    console.log(props);
    console.log(props.post);
    const {title,body,id,userId}=props.post;
    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    {/* <Link to={'/bondhu/'+id}> Bondhu er Details </Link> <br /> */}
                    {/* <Button onClick={showUserDetail} variant="primary"> Bondhu er Details </Button> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SinglePostComponent;