import { INCREMENT, DECREMENT, RESET, SET_STEP } from './actions';

const initialState = {
  count: 0,
  incrementCount: 0, // Compteur pour les incrémentations
  decrementCount: 0, // Compteur pour les décrémentations
  resetCount: 0,     // Compteur pour les mises à zéro
  totalOperations: 0,
  step: 1,
  lastOperation: 'Aucune',
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + state.step,
        incrementCount: state.incrementCount + 1,
        totalOperations: state.totalOperations + 1,
        lastOperation: 'Incrémentation',
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - state.step,
        decrementCount: state.decrementCount + 1,
        totalOperations: state.totalOperations + 1,
        lastOperation: 'Décrémentation',
      };
    case RESET:
      return {
        ...state,
        count: 0,
        resetCount: state.resetCount + 1,
        totalOperations: state.totalOperations + 1,
        lastOperation: 'Réinitialisation',
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
