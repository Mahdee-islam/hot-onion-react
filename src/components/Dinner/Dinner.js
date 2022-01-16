import React, { useEffect, useState } from 'react';
import DinnerMeal from './DinnerMeal';

const Dinner = () => {
    const [meals, setMeals] = useState([]);
    useEffect( () => {
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setMeals(data))
    },[])
    return (
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
                meals.map(meal => <DinnerMeal key={meal.id} meal = { meal } ></DinnerMeal>)
            }
          </div>
        </div>
    );
};

export default Dinner;