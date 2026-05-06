import React, { useState } from 'react';

const SingleFood = ({food}) => {
    const [test, setTest] = useState(false);
    const handleTest = () =>{
        setTest(!test)
    }
    return (
        <div className={`food img ${test && "food-test"}`}>
            <img src={food.strMealThumb} alt="" />
            <h2>Meal :{food.strMeal}</h2>
            <p> Area:{food.strArea}</p>
            <button onClick={handleTest}>{test?"Test":"Not Test"}</button>
        </div>
    );
};

export default SingleFood;