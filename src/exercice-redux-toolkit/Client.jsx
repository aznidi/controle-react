import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ajouterclient } from './Actions';

function Client() {
    const dispatch = useDispatch();
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();
    const clients = useSelector((state) => state.client);
    return (
      <>
        <div>
          <p>Ajouter un client :</p>
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">Nom</label>
            <input type="text" onChange={(e) => setNom(e.target.value)} required/>

            <label htmlFor="">Prenom</label>
            <input type="text" onChange={(e) => setPrenom(e.target.value)} required/>

            <label htmlFor="">Adresse</label>
            <input type="text" onChange={(e) => setAdresse(e.target.value)} required/>
            <button onClick={() => dispatch(ajouterclient({ id: Date.now(), nom, prenom, adresse }))}>Ajouter</button>
          </form>
        </div>

        {
          clients.length ? (
            <ul>
              {clients.map(client => (
                <li key={client.id}>{client.nom} {client.prenom} - {client.adresse}</li>
              ))}
            </ul>
          ) : (
            <p>Aucun client ajouté</p>
          )
        }
      </>
    )
}

export default Client