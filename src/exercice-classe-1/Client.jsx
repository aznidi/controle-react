import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { additionClient,supprimerClient ,modifierClient} from './Actions';
function Client() {
    const dispatch = useDispatch();
    const [nom,SetNom] = useState()
    const [prenom,SetPrenom] = useState()
    const [adresse,SetAdresse] = useState()
    const [id,setId]=useState()

    const commandes = useSelector(state=>state.commande.commandes)
    const clients = useSelector(state=>state.client.clients)
    const supclient = (id) => {
        const client = commandes.find(el=>el.client == id)
        if (!client) {
            dispatch(supprimerClient(id))
        }
        else{
            alert("client deja a des commandes a ne pas supprimer")
        }
    }
    const editer=(id)=>{
        const obj=clients.find(el=>el.id==id);
    SetNom(obj.nom);
    SetPrenom(obj.prenom);
    SetAdresse(obj.adresse);setId(obj.id)}

    return (
    <>
    <form onSubmit={(e)=>e.preventDefault()}>
       <label>nom: </label> 
       <input type="text" value={nom} onChange={(e)=>SetNom(e.target.value)} required/>
       <label>prenom: </label> 
       <input type="text" value={prenom} onChange={(e)=>SetPrenom(e.target.value)} required/>
       <label>adresse: </label> 
       <input type="text" value={adresse} onChange={(e)=>SetAdresse(e.target.value)} required/>
    <button onClick={()=>{nom&&prenom&&adresse &&dispatch(additionClient({id:Date.now(),nom:nom,prenom:prenom,adresse:adresse}))}}>ajouter</button>
    <button onClick={()=>{nom&&prenom&&adresse &&dispatch(modifierClient({id:id,nom:nom,prenom:prenom,adresse:adresse}))}}>Modifier</button>


    </form>
    <table>
        <thead>
            <tr>
                <th>nom</th> <th>prenom</th> <th>adresse</th> <th>supprimer</th><th>Editer</th>
            </tr>
        </thead>
        <tbody>
           {clients.map(el=><tr key={el.id}>
            <td>{el.nom}</td>
            <td>{el.prenom}</td>
            <td>{el.adresse}</td>
            <td><button onClick={()=>supclient(el.id)}>supprimer</button></td>
           <td><button onClick={()=>editer(el.id)}>Editer</button></td>
           </tr>)}
        </tbody>

    </table>
    </>
  )
}

export default Client