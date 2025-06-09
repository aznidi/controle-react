import { combineReducers } from "redux";
import { clientReducer, commandeReducer } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducers = combineReducers({client: clientReducer, commande: commandeReducer})
export const store = configureStore({ reducer: rootReducers })