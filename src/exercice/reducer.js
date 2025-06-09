// reducer.js
import { ADD_OPERATION, CLEAR_OPERATIONS, SET_FILTER } from './actions';

const initialState = {
  resultat: 0,
  operations: [],
  filter: 'ALL', // Par défaut, afficher toutes les opérations
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPERATION:
      return {
        ...state,
        resultat: action.payload.result,
        operations: [
          ...state.operations,
          { text: action.payload.operation, type: action.payload.type },
        ],
      };
    case CLEAR_OPERATIONS:
      return initialState;
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
