import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import styles from './MoreDays.module.css';


class MoreDays extends Component {


    getMoreDaysWeather = (obj) => {
        // let arr = [];
        let arr = obj.data.list;


        // let afterTemp = arr.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.temp);
        // let afterWeather = arr.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.weather);
        // let afterHumidity = arr.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.humidity);

        // let date = arr.filter(el => el.dt_txt.includes('21:00:00')).map(el => moment.unix(el.dt).format('MMM Do YY'));

        let allweatherArr = [];
        // allweatherArr.push(afterTemp, afterWeather, afterHumidity, date);
        console.log(allweatherArr);
        console.log(arr);
    }

    render() {
        const { moreDaysData } = this.props;
        // this.getMoreDaysWeather(this.props.moreDaysData);
        return (
            <div>
                {moreDaysData === undefined ?
                    <div className={styles.loader}><Loader type="Watch" color="#2356a9" height="100" width="100" /></div> :
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, accusamus.</p>
                    // moreDaysData.map(el => <p>{el.main.temp}</p>)
                    // <ul className={styles.weather_info}>
                    //     <li className={styles.city_name}>{data.name}</li>
                    //     <li>temperature : {data.main.temp} &deg; C</li>
                    //     <li>pressure : {data.main.pressure} mm Hg </li>
                    //     <li>humidity : {data.main.humidity} %</li>
                    //     <li>wind : {data.wind.speed} m/s</li>
                    //     <li><img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="img" className={styles.icon} /></li>
                    // </ul>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        moreDaysData: state.moreDaysData.data.list,
    }
}


export default connect(mapStateToProps, null)(MoreDays);


