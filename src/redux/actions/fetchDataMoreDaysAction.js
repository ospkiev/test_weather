import axios from 'axios';

export function fetchDataMoreDaysAction(data) {
    return {
        type: 'fetchDataMoreDaysAction',
        data: data,
    }
};

export const fetchDataMoreDays = (q) => dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=8defc985a5e2c764076c53bf90c6c44e&units=metric&lang=ru&q=${q || 'Kiev'}`)
        .then(res => dispatch(fetchDataMoreDaysAction(res.data)))
        // .then(res => console.log(res.data))
        .catch(error => console.log(error))
}