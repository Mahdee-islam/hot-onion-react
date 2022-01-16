import React, { useEffect, useState } from 'react';
import BreakfastMeal from './BreakfastMeal';

const Breakfast = () => {
   const [meals, setMeals] = useState([]);
   useEffect( ()=> {
       fetch('breakfast.json')
       .then(res => res.json())
       .then(data => setMeals(data))
   },[])
    return (
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {
              meals.map( meal => <BreakfastMeal key={meal.id} meal = { meal } ></BreakfastMeal>)
          }
          </div>
        </div>
    );
};

export default Breakfast;