export default function inputReducer(state = '', action) {
    switch (action.type) {
        case 'input':
            return action.data;

        case 'inputClear':
            return action.data;

        default:
            return state;

    }
}