import React from 'react';

const SingleFood = ({food}) => {
    return (
        <div className='food'>
            <h2>{food.strMeal}</h2>
            <img src={food.strMealThumb} alt="" />
        </div>
    );
};

export default SingleFood;