import React, { useEffect, useState } from 'react'

function Affichage({ data, deleteEle, edit }) {
    const [dataV, setDataV] = useState([])
    useEffect(()=>{
        setDataV(data)
    }, [data])
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Supprimer</th>
                <th>Modifer</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((ele, index) => (
                    <tr key={index}>
                        <td>
                            {ele.id}
                        </td>
                        <td>
                            {ele.nom}
                        </td>
                        <td>
                            {ele.prenom}
                        </td>
                        <td>
                            <button
                            onClick={() => deleteEle(ele.id)}
                            >Supprimer</button>
                        </td>
                        <td>
                            <button
                            onClick={() => edit(ele)}
                            >Modifer</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Affichage