import axios from 'axios';
import urls from '../../constants/urls'

export function fetchDataMoreDaysAction(data) {
    return {
        type: 'fetchDataMoreDaysAction',
        data: data,
    }
};

export const fetchDataMoreDays = (param) => dispatch => {
    axios.get(`${urls.getWeatherFiveDays}${param || 'Kiev'}`)
        .then(res => dispatch(fetchDataMoreDaysAction(res.data)))
        .catch(error => console.log(error))
}

