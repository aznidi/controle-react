import { legacy_createStore as createStore } from "redux";
import { calculatorReducer } from "./reducers";

export const store = createStore(calculatorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());