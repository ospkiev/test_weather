import axios from 'axios';

export function fetchDataAction(data) {
    return {
        type: 'fetchDataAction',
        data: data,
    }
};

export const fetchData = (j) => dispatch => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=${j || 'Kiev'}`)
        .then(res => dispatch(fetchDataAction(res.data)))
        // .then(res => console.log(res.data))
        .catch(error => console.log(error))
};