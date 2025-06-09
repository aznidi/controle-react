export const addcli = 'ADDCLI';
export const supcli = 'SUPCLI';
export const editcli = 'EDITCLI';
export const modifcli = 'MODIFCLI';


// Commandes 
export const addcmd = 'ADDCMD';
export const supcmd = 'SUPCMD';


export const ajouterclient = (client) => ({type: addcli, payload: client});
export const supprimerclient = (id) => ({type: supcli, payload: id});
export const editerclient = (id) => ({type: editcli, payload: id});
export const modiferclient = (newCli) => ({type: modifcli, payload: newCli});


//COMMANDES
export const ajoutercommande = (commande) => ({type: addcmd, payload: commande})
export const supprimercommande = (id) => ({type: supcmd, payload: id})