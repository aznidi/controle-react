import { addcli, addcmd, delcli, delcmd, editcli, editcmd, updatecli, updatecmd } from "./Action";

const inisilizeStateClients = {clients: [], editedClient: null};
const inisilizeStateCommandes = {commandes: [], editedCommande: null};

export const clientReducer = (state = inisilizeStateClients, { type, payload }) => {
    switch(type) {
        case addcli:
            return {...state, clients: [...state.clients, payload]}
        case delcli:
            return {...state, clients: [...state.clients.filter((ele) => ele.id !== payload)]}
        case editcli:
            console.log("Editing client:", payload);
            return { ...state, editedClient: payload.id };
        
        case updatecli:
            console.log("Updating client state:", payload);
            return {
                ...state,
                clients: state.clients.map((cli) =>
                    cli.id === payload.id ? { ...cli, nom: payload.nom, prenom: payload.prenom } : cli
                ),
                editedClient: null,
            };
            
            
            
        default: return state
    }
}

export const commandeReducer = (state = inisilizeStateCommandes, { type, payload }) => {
    switch(type){
        case addcmd:
            return {}
        case delcmd:
            return {}
        case editcmd:
            return {}
        case updatecmd:
            return {}
        default: return state
    }
}