import { addcli, addcom, supcli, supcom } from "./Actions"

const initialStateClient = {clients : []}
const initialStateCommande = {commandes : []}

export const clientReducer = (state = initialStateClient, action ) => {
    switch (action.type) {

        case addcli:
            return { ...state, clients: [...state.clients, action.payload.client] }

        case supcli:
            return { ...state, clients: [...state.clients.filter(el => el.id != action.payload.id)] }
        default:
            return state
    }
}


export const commandeReducer = (state = initialStateCommande, action ) => {
    switch (action.type) {

        case addcom:
            return { ...state, commandes: [...state.commandes, action.payload.commande] }

        case supcom:
            return { ...state, commandes: [...state.commandes.filter(el => el.id != action.payload.id)] }
        default:
            return state
    }
}
