import { decrement, increment, maz } from "./Actions"

const initilizeStateCounter = {counter: 0}

export const counterReducer = (state = initilizeStateCounter, { type, payload }) => {
    switch (type) {
        case increment:
            return {
                ...state, counter: state.counter + +payload
            }
        case decrement:
            return {
                ...state, counter: state.counter - payload
            }
        case maz: 
            return {
                counter: 0
            }
        default: return state
    }
}
