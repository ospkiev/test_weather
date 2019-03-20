import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul className={styles.nav}>
                <li>
                    <NavLink className={styles.li} to='/'>Today</NavLink>
                </li>
                <li>
                    <NavLink className={styles.li} to='/moredays'>Forecast for 5 days</NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Menu;