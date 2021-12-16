import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Products.css';

const Produts = () => {
    const [meal, setMeal] = useState([]);
    const [mealName, setMealName] = useState('');

    const searchHandle = (event) => {
        const d = event.target.value;
        setMealName(d)
    }

    useEffect(() => {
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals === null) {
                    return alert('not found...')
                }
                setMeal(data.meals)
            })
    }, [mealName])




    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>The Meal DB.</h1>
            <div className='field'><input onChange={searchHandle} type="text" placeholder='Search Your Favorites Food Or Meals...' /></div>
            <div className='main'>
                {
                    meal.map((item) => <Item data={item} key={item.idMeal}></Item>)
                }
            </div>
        </div>
    );
};

export default Produts;