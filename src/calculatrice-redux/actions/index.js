export const addOperation = (result, operation) => {
    return {
        type: 'ADD_OPERATION',
        payload: {result, operation},
    }
}

export const clearOperations = () => {
    return {
        type: 'CLEAR_OPERATIONS',
    }
}


export const filterOperations = (operations) => {
    return {
        type: 'FILTER_OPERATIONS',
        payload: operations,
    }
}