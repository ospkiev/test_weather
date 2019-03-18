export function saveToListAction(data) {
    return {
        type: 'saveToList',
        data: data,
    }
}

export const saveToList = (city) => dispatch => {
    return dispatch(saveToListAction(city))
