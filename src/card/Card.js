import React from 'react';
// import Loader from 'react-loader-spinner';
import styles from './Card.module.css';


const Card = ({ el, cityName }) => {
    return (
        <div className={styles.card}>
            <ul className={styles.weather_info}>
                <li className={styles.city_name}>{cityName.name}</li>
                <li key={el.date} className={styles.date}>{el.date}</li>
                <li key={el.main.temp}>temperature : {el.main.temp} &deg; C</li>
                <li key={el.main.pressure}>pressure : {el.main.pressure} mm Hg </li>
                <li key={el.main.humidity}>humidity : {el.main.humidity} %</li>
                <li key={el.wind.speed}>wind : {el.wind.speed} m/s</li>

                <li><img src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt="img" className={styles.icon} /></li>
            </ul>
        </div>
    )
};


export default Card;