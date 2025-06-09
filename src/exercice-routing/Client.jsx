import React from 'react'
import { useParams } from 'react-router-dom';
import { clients, commandes } from './data';

function Client() {
    const { id } = useParams();
    const client = clients.find((c) => c.id === parseInt(id));
    const commandesClient = commandes.filter((c) => c.numcli === parseInt(id));
  
    if (!client) {
      return <h2>Client introuvable</h2>;
    }
  
    return (
      <div>
        <h2>Détails du client</h2>
        <p><strong>ID:</strong> {client.id}</p>
        <p><strong>Nom:</strong> {client.nom}</p>
        <p><strong>Prenom:</strong> {client.prenom}</p>
        <p><strong>Adresse:</strong> {client.adr}</p>
      </div>
    );
  }

export default Client