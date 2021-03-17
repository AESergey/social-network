import classes from './Header.module.css';
import React, { Component } from 'react';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='http://pixner.net/peyamba/peyamba/assets/images/footer/n-icon.png' />
        </header>
    );
}

export default Header;