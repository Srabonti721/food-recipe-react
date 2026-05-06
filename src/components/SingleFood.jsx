import React, { useState } from 'react';

const SingleFood = ({food, handleTestingFood, handleImage}) => {
    // console.log(handleTestingFood);
    
    const [test, setTest] = useState(false);
    const handleTest = () =>{
        setTest(!test)
        handleTestingFood(food)
    }
    return (
        <div className={`food img ${test && "food-test"}`}>
            <img src={food.strMealThumb} alt="" />
            <h2>Meal :{food.strMeal}</h2>
            <p> Area:{food.strArea}</p>
            <button onClick={handleTest}>{test?"Test":"Not Test"}</button>
            <button onClick={()=>handleImage(food.strMealThumb)}>image</button>
        </div>
    );
};

export default SingleFood;