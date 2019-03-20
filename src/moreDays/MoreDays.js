import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';


class MoreDays extends Component {


    getMoreDaysWeather = (obj) => {
        console.log(obj.data.city);
    }

    render() {
        console.log(this.getMoreDaysWeather(this.props.moreDaysData));
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        moreDaysData: state.moreDaysData,
    }

}


export default connect(mapStateToProps, null)(MoreDays);


