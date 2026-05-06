import React, { use } from 'react';
import SingleFood from '../SingleFood';
import './food.css'
const Foods = ({foodPromise}) => {
    const foods = use(foodPromise)
    console.log(foods.meals);
            
    return (
        <div >
            <h2>FOOD LIST : {foods.meals.length}</h2>
            <p>testing food : </p>
 <div className='food-container'>
           {
            foods.meals.map(food=><SingleFood food={food}></SingleFood>)
        }
 </div>
        </div>
    );
};

export default Foods;