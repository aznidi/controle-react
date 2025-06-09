// actions.js
export const ADD_OPERATION = 'ADD_OPERATION';
export const CLEAR_OPERATIONS = 'CLEAR_OPERATIONS';
export const SET_FILTER = 'SET_FILTER';

export const addOperation = (operation, result, type) => ({
  type: ADD_OPERATION,
  payload: { operation, result, type },
});

export const clearOperations = () => ({
  type: CLEAR_OPERATIONS,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
