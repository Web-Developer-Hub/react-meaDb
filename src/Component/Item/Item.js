import React from 'react';
import './Item.css'

const Item = (props) => {
    const items = props.data;

    return (
        <div className='child'>
            <div className='image'> <img className='img' src={items.strMealThumb} alt="data" /></div>
            <h3>ID: {items.idMeal}</h3>
            <h3>Name: {items.strMeal}</h3>
            <h3>Category: {items.strCategory}</h3>
            <p>Description: {items.strInstructions.slice(0, 150)}</p>
        </div>
    );
};

export default Item;