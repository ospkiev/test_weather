export function inputAction(e) {
    return {
        type: 'input',
        data: e.target.value,
    }
}