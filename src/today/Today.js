import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import styles from './Today.module.css';

class Today extends Component {
    render() {
        const { data, loading } = this.props;
        return (

            <div>
                {!loading ?
                    <div className={styles.loader}><Loader type="Watch" color="#2356a9" height="100" width="100" /></div> :
                    <ul className={styles.weather_info}>
                        <li className={styles.city_name}>{data.name}</li>
                        <li>temperature : {data.main.temp} &deg; C</li>
                        <li>pressure : {data.main.pressure} mm Hg </li>
                        <li>humidity : {data.main.humidity} %</li>
                        <li>wind : {data.wind.speed} m/s</li>
                        <li><img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="img" className={styles.icon} /></li>
                    </ul>
                }
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        data: state.data.data,
        loading: state.data.loading,
    }
}

export default connect(mapStateToProps, null)(Today);