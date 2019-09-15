import axios from 'axios';
import urls from '../../constants/urls';

export function fetchDataAction(data) {
    return {
        type: 'fetchDataAction',
        data: data,
    }
};

export const fetchData = (param) => dispatch => {
    return axios.get(`${urls.getWeather}${param || 'Kiev'}`)
        .then(res => dispatch(fetchDataAction(res.data)))
        // .then(res => console.log(res.data))
        .catch(error => console.log(error))
};