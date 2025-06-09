import React from 'react'

function Affichage({data, editResource, deleteResource, changeIsDisplay}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Numero</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Adresse</th>
                <th>Edition</th>
                <th>Suppression</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((resource, index) => ( 
                    <tr key={index}>
                        <td key={index}>{resource.id}</td>
                        <td key={index}>{resource.nom}</td>
                        <td key={index}>{resource.prenom}</td>
                        <td key={index}>{resource.adresse}</td>
                        <td key={index}><button onClick={() => {editResource(resource);changeIsDisplay('block')}}>Edit</button></td>
                        <td key={index}><button onClick={() => deleteResource(resource.id)}>Supprime</button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Affichage