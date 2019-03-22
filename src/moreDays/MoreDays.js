import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Card from '../card/Card';
import Loader from 'react-loader-spinner'
import styles from './MoreDays.module.css';


class MoreDays extends Component {

    state = {
        fiveDays: [],
        // date: [],

    }

    getWeather() {
        if (this.props.moreDaysData === undefined) {
            return;
        } else {
            let info = this.props.moreDaysData.filter(el => el.dt_txt.includes('15:00:00'));
            let date = this.props.moreDaysData.filter(el => el.dt_txt.includes('15:00:00')).map(el => moment.unix(el.dt).format('MMM Do YY'));
            let array = info.map((el, idx) => ({ ...el, date: date[idx] }))

            this.setState({
                fiveDays: array,
                // date: date,
            })
        }
    }


    componentDidUpdate(prev) {
        if (prev.moreDaysData !== this.props.moreDaysData) {
            this.getWeather();
        }
    }

    componentDidMount() {
        this.getWeather();
    }


    render() {
        const { moreDaysData, cityName } = this.props;
        const { fiveDays } = this.state;

        console.log(fiveDays);

        return (
            <div>
                <div className={styles.wrapper}>

                    {moreDaysData === undefined && cityName === undefined
                        ? <div className={styles.loader}><Loader type="Watch" color="#2356a9" height="100" width="100" /></div>
                        : fiveDays.map(el => <div className={styles.card}><Card key={el.main.temp} el={el} cityName={cityName} /></div>)
                    }
                </div>

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





