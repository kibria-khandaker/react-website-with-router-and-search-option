import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Countries = () => {

    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])


    return (
        <Container>
            <Row>
                <h1>Here are Total {countries.length} Countries</h1>
                {
                    countries.map(country =><li 
                        key={country.name.common}
                    >
                        <Link 
                        to={`/country/${country.name.common}`}
                        >{country.name.common}</Link>
                    </li> )
                }                
            </Row>
        </Container>
    );
};

export default Countries;