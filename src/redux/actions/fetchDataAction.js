import axios from 'axios';

export function fetchDataAction(data) {
    return {
        type: 'fetchDataAction',
        data: data,
    }
};

export const fetchData = (query) => dispatch => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=b5ec4144af2651a6b2eb07fb26d8ba0c&units=metric&lang=ru&q=${query || 'Kiev'}`)
        .then(res => dispatch(fetchDataAction(res.data)))
        // .then(res => console.log(res.data))
        .catch(error => console.log(error))
};