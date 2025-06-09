export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';
export const maz = 'MAZ';


export const incrementer = (step) => ({type: increment, payload: step});
export const decrementer = (step) => ({type: decrement, payload: step});
export const misazero = () => ({type: maz, payload: null});