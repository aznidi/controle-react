const inisializeStateCounter = {counter: 0};

export const counterReducer = (state = inisializeStateCounter, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT' :
            return {counter: state.counter - 1};
        case 'MAZ' :
            return {counter: 0};
        default: 
            return state
    }
}