const inisilizeStateCalculatrice = {result: 0, operations: [], filtredOperations: []}

export const calculatorReducer = (state = inisilizeStateCalculatrice, action) => {
    switch(action.type) {
        case 'ADD_OPERATION': 
            return {
                ...state,
                result: action.payload.result,
                operations: [...state.operations, action.payload.operation]
            }
        case 'CLEAR_OPERATIONS':
            return {
                result: 0,
                operations: [],
                filtredOperations: []
            }

        case 'FILTER_OPERATIONS':
            return {
                ...state,
                filtredOperations: action.payload,
            }
        default: return state;
    }
}