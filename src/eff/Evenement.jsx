import React, { useState } from 'react'

function Evenement({ data }) {

    const total = () => {
        return data.événements.reduce((acc, event) => acc + event.cout_journalier, 0);
       
    }
   const somtotal=total()
    return (
        <div>
            <h1>{data.nom_complet }</h1>

            <table border={1}>
                <thead>
                    <tr>
                    <th>theme</th>
                    <th>date debut</th>
                    <th>date fin</th>
                    <th>description</th>
                    <th>cout</th>
                    </tr>
                </thead>
                {
                    data.événements.map((el)=>
                        <tr>
                            <td>{el.thème}</td>
                            <td>{el.date_debut}</td>
                            <td>{el.date_fin}</td>
                            <td>{el.description}</td>
                            <td>{el.cout_journalier}</td>
                        </tr>

                    )
                }
                <tr><td colSpan={5}>Total des couts des événements assurés est: {somtotal} </td></tr>
            </table>
 
            
            </div>
            
            
    )
}

export default Evenement