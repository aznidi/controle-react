
//import { legacy_createStore as createStore,combineReducers } from "redux"; 
import { reducerClient,reducerCommande } from "./Reducers";

//const rootreducer = combineReducers({client:reducerClient,commande:reducerCommande})
//export const store = createStore(rootreducer)
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
const rootreducer = combineReducers({client:reducerClient,commande:reducerCommande})
export const store = configureStore({reducer:rootreducer})
