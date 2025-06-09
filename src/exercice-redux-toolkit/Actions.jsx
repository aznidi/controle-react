export const addcli = 'ADDCLI';
export const supcli = 'SUPPCLI';
export const addcom = 'ADDCOM';
export const supcom = 'SUPCOM';

export const ajouterclient = (client) => ({type: addcli, payload: {client}});
export const supprimerclient = (id) => ({type: supcli, payload: {id}});

export const ajoutercommande = (commande) => ({type: addcom, payload: {commande}});
export const supprimercommande = (id) => ({type: supcom, payload: {id}});
