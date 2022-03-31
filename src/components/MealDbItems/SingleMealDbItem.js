import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleMealDbItem = (props) => {
    const { strCategoryThumb, strCategory, strCategoryDescription,idCategory } = props.meal;
    // console.log(props);
    const navigate = useNavigate();
    const showMealDetail = () => {
        const path = `/meal/${idCategory}`;
        navigate(path)
    }

    return (
        <Col>
            <Card className='h-100"' >
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>ID: {idCategory}</Card.Title>
                    <Card.Text>
                        Category: { strCategory} <br />
                        Description : {strCategoryDescription}
                    </Card.Text>
                    <Button onClick={showMealDetail} variant="primary"> See Details </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleMealDbItem;