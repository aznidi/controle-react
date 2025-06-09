import React from 'react'
import { Link } from 'react-router-dom';
import { clients} from './data';

function Clients() {
  return (
    <div>
      <h2>Liste des clients</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Détails</th>
            <th>Commandes</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.nom}</td>
              <td>
                <Link to={`/client/${client.id}`}>Voir détails</Link>
              </td>
              <td>
                <Link to={`/client/commandes/${client.id}`}>Voir Commandes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients