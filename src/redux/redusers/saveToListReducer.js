export default function saveToListReducer(state = [], action) {
    switch (action.type) {
        case 'saveToList':
            if (state.every(el => el.name !== action.data.name)) {
                state = [action.data, ...state];
                return state.slice(0, 5)
            };
            break;
        default:
            return state;
    }
};