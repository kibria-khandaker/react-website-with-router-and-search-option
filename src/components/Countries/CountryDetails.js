import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const {countryName} = useParams();

    return (
        <Container>
            <Row>
                <Col>
                <h1>Country Name is :  {countryName}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default CountryDetails;