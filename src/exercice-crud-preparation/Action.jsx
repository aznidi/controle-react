//Clients
export const addcli = 'ADDCLI';
export const delcli = 'DELCLI';
export const editcli = 'EDITCLI';
export const updatecli = 'UPDATECLI';
//Commandes
export const addcmd = 'ADDCMD';
export const delcmd = 'DELCMD';
export const editcmd = 'EDITCMD';
export const updatecmd = 'UPDATECMD';



//Clients
export const ajouterclient = (client) => ({type: addcli, payload: client});
export const deleteclient = (id) => ({type: delcli, payload: id});
export const editclient = (client) => ({type: editcli, payload: client});
export const updateclient = (newclient) => ({type: updatecli, payload: newclient});
//commandes
export const ajoutercommande = (commande) => ({type: addcmd, payload: commande});
export const deletecommande = (id) => ({type: delcmd, payload: id});
export const editcommande = (id) => ({type: editcmd, payload: id});
export const updatecommande = (newcommande) => ({type: updatecmd, payload: newcommande});

