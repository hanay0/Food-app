import React, { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });
    }

  return (
    <li className={classes.meal}>
        <div className={classes['flex-centered-wrapper']}>
            <img className={classes['meal-img']} src={props.imgURL} alt={props.name} />
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div className={classes['flex-centered-wrapper']}>
            <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </div>
    </li>
  )
}

export default MealItem