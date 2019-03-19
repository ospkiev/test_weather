export default function saveToListReducer(state = [], action) {
    switch (action.type) {
        case 'saveToList':
            return [...state, action.data];

        default:
            return state;
    }
}