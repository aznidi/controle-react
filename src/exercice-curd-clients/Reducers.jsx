import { addcli, addcmd, editcli, modifcli, supcli, supcmd } from "./Actions"

const initialStateClients = {clients: [], editedClient: null}
const initialStateCommandes = {commandes: []}

export const clientsReducers = (state = initialStateClients, { type, payload }) => {
    switch (type) {
        case addcli:
            return { ...state, clients: [...state.clients, payload] }


        case supcli:
            return { ...state, clients: state.clients.filter((ele) => ele.id != payload) }

        
        case editcli:
            return {... state, editedClient: state.clients.find((ele) =>  ele.id === payload)}    
        case modifcli:
            return {
                ...state,
                clients: [...state.clients.filter((ele) => ele.id !== payload.id), payload],
                editedClient: null,
            }
        default:
            return state
    }
}


export const commandesReducer = (state = initialStateCommandes, { type, payload }) => {
    switch(type) {
        case addcmd:
            return {... state, commandes: [...state.commandes, payload]}
        case supcmd:
            return {...state, commandes: [...state.commandes.filter((ele) => ele.id !== payload)]}
        default: return state
    }
}