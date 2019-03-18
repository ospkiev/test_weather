export default function fetchData(state = [], action) {
    switch (action.type) {
        case 'fetchDataAction':
            return action.data;

        default:
            return state;
    }
}