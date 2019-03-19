export function inputAction(e) {
    return {
        type: 'input',
        data: e.target.value,
    }
}

export function inputClear() {
    return {
        type: 'inputClear',
        data: '',
    }
}