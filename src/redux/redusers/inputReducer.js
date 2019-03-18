export default function inputReducer(state = '', action) {
    switch (action.type) {
        case 'input':
            return action.data;

        default:
            return state;

    }
}