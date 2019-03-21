import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import styles from './MoreDays.module.css';


class MoreDays extends Component {


    getWeather = async () => {
        let info = [];
        info = this.props.moreDaysData.filter(el => el.dt_txt.includes('15:00:00'));
        // let date = list.filter(el => el.dt_txt.includes('21:00:00')).map(el => moment.unix(el.dt).format('MMM Do YY'));
        // let allweatherArr = [];
        // allweatherArr.push(afterTemp, afterWeather, afterHumidity, date);
        console.log(info);
    }


    render() {
        const { moreDaysData, cityName } = this.props;
        // const { data } = this.state;
        // console.log(this.state.data);

        // this.getNameCity();
        this.getWeather();

        return (
            <div>
                {moreDaysData === undefined ?
                    <div className={styles.loader}><Loader type="Watch" color="#2356a9" height="100" width="100" /></div> :
                    moreDaysData.map(el =>
                        <ul className={styles.weather_info}>
                            <li className={styles.city_name}>{cityName.name}</li>
                            <li key={el.main.temp}>temperature : {el.main.temp} &deg; C</li>
                            <li key={el.main.pressure}>pressure : {el.main.pressure} mm Hg </li>
                            <li key={el.main.humidity}>humidity : {el.main.humidity} %</li>
                            <li key={el.wind.speed}>wind : {el.wind.speed} m/s</li>
                            <li><img src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`} alt="img" className={styles.icon} /></li>
                        </ul>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        moreDaysData: state.moreDaysData.data.list,
        cityName: state.moreDaysData.data.city
    }
}


export default connect(mapStateToProps, null)(MoreDays);


