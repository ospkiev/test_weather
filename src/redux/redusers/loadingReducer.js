export default function isLoading(state = false, action) {
    switch (action.type) {
        case 'isLoading':
            return !state;
        default:
            return state;
    }
}