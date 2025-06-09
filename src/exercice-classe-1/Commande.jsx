import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { additionCommande,supprimerCommande, modiferCommande } from './Actions';
function Commande() {
    const dispatch = useDispatch();
    const [datecde,setDatecde] = useState()
    const [total,setTotal] = useState()
    const [client,setClient] = useState()
    const [id, setId] = useState();
    


    const commandes = useSelector(state=>state.commande.commandes)
    const clients = useSelector(state=>state.client.clients)

    const editer = (id) => {
        const cmd = commandes.find((ele) => ele.id == id)
        setDatecde(cmd.datecde);
        setTotal(cmd.total);
        setId(cmd.id)
    }
    return (
    <>
    <form onSubmit={(e)=>e.preventDefault()}>
       <label>datecde: </label> 
       <input type="date" value={datecde} onChange={(e)=>setDatecde(e.target.value)} required/>
       <label>total: </label> 
       <input type="number" value={total} onChange={(e)=>setTotal(e.target.value)} required/>
       <label>client: </label> 
        <select value={client} onChange={e=>setClient(e.target.value)} required>
            <option value="">veuillez choisir un client svp</option>
            {
                clients.map(el=><option value={el.id} key={el.id}>{el.nom}--{el.prenom}</option>)
            }
        </select>
    <button onClick={()=>{datecde&&total&&client&&dispatch(additionCommande({id:Date.now(),datecde:datecde,total:total,client:client}))}}>ajouter</button>
    


    </form>
    <button onClick={()=>{datecde&&total&&client&&dispatch(modiferCommande({id:id,datecde:datecde,total:total,client:client}))}}>
        modifer
        </button>
    <table>
        <thead>
            <tr>
                <th>datecde</th> <th>total</th> <th>numcli</th> <th>supprimer</th> <th>Editer</th>
            </tr>
        </thead>
        <tbody>
           {commandes.map(el=><tr key={el.id}>
            <td>{el.datecde}</td>
            <td>{el.total}</td>
            <td>{el.client}</td>
            <td><button onClick={()=>dispatch(supprimerCommande(el.id))}>supprimer</button></td>
            <td><button onClick={()=>editer(el.id)}>Editer</button></td>
           </tr>)}
        </tbody>

    </table>
    </>
  )
}

export default Commande