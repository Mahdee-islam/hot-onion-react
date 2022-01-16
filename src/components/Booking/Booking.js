import React from 'react';
import { useParams } from 'react-router-dom';
import useMeal from '../../hooks/useMeal';


const Booking = (  ) => {
    const meals = useMeal();
    console.log(meals.findIndex());
    const { img, name, des, price } = meals;
    console.log(meals);
    const { mealId } = useParams([meals]);
   
    return (
        <div>
            <h2>All about: {mealId} </h2>
            <p> {name} </p>
            
          </div>
    );
};

export default Booking;