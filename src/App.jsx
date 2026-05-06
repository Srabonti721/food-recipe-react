
import { Suspense } from 'react'
import './App.css'
import Foods from './components/Foods/Foods'


const fetchFoodData = async() =>{
const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
return res.json()
}
function App() {
const foodPromise = fetchFoodData();
// console.log(foodPromise);


  return (
    <>
<Suspense fallback={<h2>food coming...</h2>}>
  <Foods foodPromise={foodPromise}></Foods>
</Suspense>
    </>
  )
}

export default App
