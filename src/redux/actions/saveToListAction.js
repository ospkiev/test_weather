import uuidv4 from 'uuid/v4';


export function saveToListAction(data) {
    return {
        type: 'saveToList',
        data: {
            name: data,
            id: uuidv4(),
        }
    }
}

export const saveToList = (city) => dispatch => {
    return dispatch(saveToListAction(city))
}
