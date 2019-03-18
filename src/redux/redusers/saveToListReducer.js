export default function saveToListReducer(state = [], action) {
    switch (action.type) {
        case 'saveToList':
            return action.data;

        default:
            return state;
    }
}