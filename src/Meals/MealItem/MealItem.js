import React from 'react';
import classes from './MealItem.module.css'

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
        <div className={classes['flex-centered-wrapper']}>
            <img className={classes['meal-img']} src={props.imgURL} alt={props.name} />
            <h3>{props.name}</h3>
            <div className={classes.desription}>{props.discription}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <form action=""></form>
        </div>
    </li>
  )
}

export default MealItem