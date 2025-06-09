import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import {ajouterclient,ajoutercommande,editerclient, modiferclient, supprimerclient, supprimercommande } from './Actions'

function App() {
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [dateCommande, setDateCommande] = useState();
    const [totalCommande, setTotalCommande] = useState();
    const [clientCommande, setClientCommande] = useState();

    
    const [contentButton, setContentButton] = useState('Ajouter')
    const editedClient = useSelector(state => state.clients.editedClient);
    const clients = useSelector(state => state.clients.clients);
    const commandes = useSelector(state => state.commandes.commandes);
    
    useEffect(() => {
        if(editedClient) {
            setNom(editedClient.nom);
            setPrenom(editedClient.prenom);
            setContentButton('Modifer');
        }
    }, [editedClient])
    const dispatch = useDispatch();
   
    const handleAddOrUpdateClient = () => {
        if (contentButton == 'Ajouter'){
            if(nom && prenom ) {
                dispatch(ajouterclient({id: Date.now(), nom: nom, prenom: prenom}));
                setNom('');
                setPrenom('');
            }
        }else if (contentButton == 'Modifer'){
            if(nom && prenom ) {
                dispatch(modiferclient({id: editedClient.id, nom: nom, prenom: prenom}));
                setNom('');
                setPrenom('');
                setContentButton('Ajouter');
            }
        }
        
    }

    const handleDeleteClient = (id) => {
        const isExist = commandes.find((ele) => ele.clientCommande == id);
        if(isExist) {
            alert('Imposiible de supprimer ce clinet (a une commande !)');
        }else{
            dispatch(supprimerclient(id))
        }
        
    }

    const handleEditClient = (id) => {
        dispatch(editerclient(id));
        
    }

    const handleAddCommande = () => {
        if(totalCommande && dateCommande && clientCommande) {
            dispatch(ajoutercommande({id: Date.now(), totalCommande: totalCommande, dateCommande: dateCommande, clientCommande:clientCommande}))
            
        }

    }

    const handleDeleteCommande = (id) => {
        dispatch(supprimercommande(id));
    }
    return (
        <>
                        <fieldset>
                <legend>Gestion des clients</legend>
                <div>
                    <h5>Ajouter un client :</h5>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                    <button onClick={handleAddOrUpdateClient}>{contentButton}</button>

                    <hr />
                    <h5>Liste des clients</h5>
                    {
                        clients.length !== 0 ?(
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
                                                clients.map((ele) => (
                                                    <tr key={ele.id}>
                                                    <td>{ele.id}</td>
                                                    <td>{ele.nom}</td>
                                                    <td>{ele.prenom}</td>
                                                    <td><button onClick={() => handleDeleteClient(ele.id)}>Supprimer</button></td>
                                                    <td><button onClick={() => handleEditClient(ele.id)}>Modifer</button></td>
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
            <fieldset>
                <legend>Gestion des commandes</legend>
                <div>
                    <input type="text" value={totalCommande} onChange={(e) => setTotalCommande(e.target.value)} />
                    <input type="date" value={dateCommande} onChange={(e) => setDateCommande(e.target.value)} />
                    <select name="" id="" value={clientCommande} onChange={(e) => setClientCommande(e.target.value)}>
                        <option value="">Choisir -- un -- client</option>
                        {clients.map((ele) => (
                            <option value={ele.id} key={ele.id}>{ele.nom} - {ele.prenom}</option>
                        ))}
                    </select>

                    <button onClick={handleAddCommande}>Ajouter Commande</button>

                    <hr />
                    <h5>Listes des commandes</h5>
                    {
                        commandes.length !== 0 ?(
                                    <>  
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>TOTAL</th>
                                                <th>DATE</th>
                                                <th>CLIENT</th>
                                                <th>SUPPRIMER</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {
                                                commandes.map((ele) => (
                                                    <tr key={ele.id}>
                                                    <td>{ele.id}</td>
                                                    <td>{ele.totalCommande}</td>
                                                    <td>{ele.dateCommande}</td>
                                                    <td>{ele.clientCommande}</td>
                                                    <td><button onClick={() => handleDeleteCommande(ele.id)}>Supprimer</button></td>
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

export default App