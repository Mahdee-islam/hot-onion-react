import React, { useEffect, useState } from 'react';
import LunchMeal from './LunchMeal';

const Lunch = () => {
    const [meals, setMeals] = useState([]);
    useEffect( () => {
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setMeals(data))
    },[])
    return (
        <div className='grid grid-cols-3'>
           {
              meals.map(meal => <LunchMeal key = { meal.id} meal = { meal }></LunchMeal>) 
           }
        </div>
    );
};

export default Lunch;