const startState = {
    data: [],
    loading: false,
}

export default function fetchData(state = startState, action) {
    switch (action.type) {
        case 'fetchDataAction':
            return {
                data: action.data,
                loading: true,
            }

        default:
            return state;
    }
}