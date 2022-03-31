import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchByCountryComponent from './SearchByCountryComponent';
// import { Link } from 'react-router-dom';

const CountriesSearch = () => {

    const [searchName, setSearchName] = useState('');
    const [searchCountres, setSearchCountres] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${searchName}`
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSearchCountres(data));
    },[searchName])

    const searchCountry =(e)=>{
        setSearchName(e?.target?.value)
    }

    return (
        <Container>
            <Row>
                <input type="text" onChange={searchCountry}  />

                <h3> Find ( {searchCountres.length} ) Country</h3>            
            </Row>
            <Row>
                {
                    searchCountres.length>0 && searchCountres.map(searchCountry =><SearchByCountryComponent 
                        key={searchCountry.name.common} 
                        searchCountry={searchCountry} 
                        ></SearchByCountryComponent>)
                }
            </Row>
        </Container>
    );
};

export default CountriesSearch;