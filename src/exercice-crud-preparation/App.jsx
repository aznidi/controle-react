import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ajouterclient,
     deleteclient,
     editclient,
     updateclient,
     ajoutercommande,
     deletecommande,
     editcommande,
     updatecommande
    } from './Action';



const Client = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [contentButton, setContentButton] = useState('Ajouter');
    const dispatch = useDispatch()

    const clientsState = useSelector((state) => {
        console.log("Clients state:", state.clients);
        return state.clients;
    });
    
    const handleAddOrUpdateClient = () => {
        if (contentButton === 'Ajouter') {
            dispatch(ajouterclient({ id: Date.now(), nom, prenom }));
            setNom('');
            setPrenom('');
        } else if (contentButton === 'Modifier') {
            console.log("Updating client with:", { id: clientsState.editedClient, nom, prenom });
            dispatch(updateclient({ id: clientsState.editedClient, nom, prenom }));
            setNom('');
            setPrenom('');
            setContentButton('Ajouter');
        }
    };
    
    const handleEditClient = (client) => {
        setNom(client.nom);
        setPrenom(client.prenom);
        setContentButton('Modifier');
        dispatch(editclient(client));
    };
    

    const handleDeleteClient = (id) => {
        dispatch(deleteclient(id));
    }
    return ( 
        <>
            <fieldset>
                <legend>Gestion des clients</legend>
                <div>
                    <h5>Ajouter un client</h5>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />

                    <button onClick={handleAddOrUpdateClient}>{contentButton}</button>

                    <hr />
                    <h6>La listes des clients</h6>

                    {
                        clientsState.clients.length !== 0 ?(
                                    <>  
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>NOM</th>
                                                <th>PRENOM</th>
                                                <th>SUPPRIMER</th>
                                                <th>MODIFER</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {
                                                clientsState.clients.map((ele) => (
                                                    <tr key={ele.id}>
                                                    <td>{ele.id}</td>
                                                    <td>{ele.nom}</td>
                                                    <td>{ele.prenom}</td>
                                                    <td><button onClick={() => handleDeleteClient(ele.id)}>Supprimer</button></td>
                                                    <td><button onClick={() => handleEditClient(ele)}>Modifer</button></td>
                                                    </tr> 
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </>
                                    
                                )
                                : ''
                                
                    }
                </div>
            </fieldset>
        </>
    )
}

const Commande = () => {

}
function App() {
  return (
    <div>
        <Client />
    </div>
  )
}

export default App