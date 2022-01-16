import { useEffect, useState } from "react";


const useMeal = () => {
    const [meals, setMeals] = useState([]);

    useEffect( ()=> {
        fetch('../breakfast.json')
        .then(res => res.json())
        .then(data => setMeals(data[0,1,2,3,4,5]))
    },[])
  
    
    return meals;
}
export default useMeal;