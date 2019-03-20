const startStateMoreDays = {
    data: [],
    loading: false,
}


export default function fetchDataMoreDays(state = startStateMoreDays, action) {
    switch (action.type) {
        case 'fetchDataMoreDaysAction':
            return {
                data: action.data,
                loading: true,
            }

        default:
            return state;
    }
}