import React from 'react';
import HeaderCartButton from '../Layout/HeaderCartButton';

import mealsImg from '../assets/meals.jpg';
import classes from './Header.module.css';


// header component will hold the header itself and the background image below the header
// it can be splitted to 2 separate components (header & hero banner)

 const Header = props => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <div className={classes.overlay}></div>
            <img src={mealsImg} alt='food table'/>
        </div>
    </React.Fragment>
    )
};

export default Header
