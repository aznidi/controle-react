import { addcli,supcli,addcom,supcom,modifcli, modifcom } from "./Actions"
import Client from "./Client"
const initializeState1 = {clients:[]}
const initializeState2 = {commandes:[]}

export const reducerClient = (state = initializeState1, action) => {
    switch (action.type) {
        case addcli:
            return {...state,clients:[...state.clients,action.payload]}
        case supcli:
            return {...state,clients:[...state.clients.filter(el=>el.id !=action.payload)]}
        case modifcli:
            return {...state,clients:[...state.clients.filter(el=>el.id !==action.payload.id),action.payload]}
        default:
            return state
    }
}
export const reducerCommande = (state = initializeState2, action) => {
    switch (action.type) {
        case addcom:
            return {...state,commandes:[...state.commandes,action.payload]}
        case supcom:
            return {...state,commandes:[...state.commandes.filter(el=>el.id !=action.payload)]}
        case modifcom:
            return {...state, commande: [...state.commande.filter(ele => ele.id !== action.payload.id), action.payload]}
        default:
            return state
    }
}
