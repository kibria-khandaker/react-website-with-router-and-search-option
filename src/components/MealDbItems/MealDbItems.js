import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleMealDbItem from './SingleMealDbItem';

const MealDbItems = () => {

    const [meals,setMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setMeals(data.categories))
    },[])

    return (
        <Container>
            <Row className='text-center'>
                {/* {
                    console.log(meals)
                } */}
                <h1> Welcome to Meal DB</h1>
                <h4>Here our {meals.length} items Showing </h4>
            </Row>
            
            <Row xs={1} md={3} className="g-4 mt-4">
                { 
                    meals.map(meal =><SingleMealDbItem 
                        key={meal.idCategory} 
                        meal={meal} 
                        ></SingleMealDbItem>)
                }
            </Row>
        </Container>
    );
};

export default MealDbItems;