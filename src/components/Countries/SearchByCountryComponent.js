import React from 'react';
import { Col } from 'react-bootstrap';


const SearchByCountryComponent = (props) => {
    const {name} = props?.searchCountry;
    // console.log(props.searchCountry);
    return (
        <Col>
            <h1>The Country is: {name.common}</h1>
            {/* 8.4--8.15 More details for the component making */}
        </Col>
    );
};

export default SearchByCountryComponent;