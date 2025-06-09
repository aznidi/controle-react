export const addcli = "ADDCLI"
export const supcli = "SUPCLI"
export const modifcli="MODIFCLI"
export const addcom = "ADDCOM"
export const supcom = "SUPCOM"
export const modifcom = "MODIFCOM"

export const additionClient = (client) =>({type:addcli,payload:client})
export const supprimerClient = (id) =>({type:supcli,payload:id})
export const modifierClient=(newclient)=>({type:modifcli,payload:newclient})
export const additionCommande = (commande) =>({type:addcom,payload:commande})
export const supprimerCommande = (id) =>({type:supcom,payload:id})
export const modiferCommande = (newCmd) =>({type:modifcom,payload:newCmd})
