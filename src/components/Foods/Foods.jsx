import React, { use, useState } from 'react';
import SingleFood from '../SingleFood';
import './food.css'
const Foods = ({ foodPromise }) => {
    const foods = use(foodPromise)
    // console.log(foods.meals);
    const [testingFood, setTestingFood] = useState([]);
    const [image, setImage] = useState([])
    const handleTestingFood = (food) => {
        console.log("click to ", food);
        const newTestingFood = [...testingFood, food]
        setTestingFood(newTestingFood)
    }
    const handleImage = (img) => {
        //    console.log(img);
        const newImage = [...image, img]
        setImage(newImage)
    }
    return (
        <div >
            <h2>FOOD LIST : {foods.meals.length}</h2>
            <p>testing food :{testingFood.length} </p>
            <ol>
                {
                    testingFood.map((food, index) => <li key={index}>{food.strMeal}</li>)
                }

            </ol>
            <div>
                {
                    image.map(img => <img style={{ width: "150px", margin: "5px" }} src={img}></img>)
                }
            </div>
            <div className='food-container'>
                {
                    foods.meals.map(food => <SingleFood
                        food={food}
                        handleTestingFood={handleTestingFood}
                        handleImage={handleImage}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default Foods;