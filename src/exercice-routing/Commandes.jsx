import React from 'react'
import { useParams } from 'react-router-dom'
import { commandes, clients } from './data'
function Commandes() {
    const { id } = useParams();
    const client = clients.find((c) => c.id === parseInt(id));
    const commandesClient = commandes.filter((c) => c.numcli === parseInt(id));
    return (
        <div>
            <h2>Détails des commandes de {`${client.nom} ${client.prenom}`}</h2>

            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                commandesClient.map((c) => (
                    <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.date}</td>
                    <td>{c.total}</td>
                    </tr>
                ))
                }
            </tbody>
            </table>
        </div>
    )
}

export default Commandes