import React from 'react'

function Affiche({ type, filtredData, deleteResource, editResource }) {
  return (
    <div>
        <p>
            Type de recherche {type}
        </p>
        <hr />
        {
            filtredData.length > 0
            ?
                <ul>
                    {
                        filtredData.map((ele, index) => (
                            <li key={index}>{ele.nom} 
                                <button onClick={() => deleteResource(ele.nom)}>
                                    DELETE
                                </button>

                                <button onClick={() => editResource(ele)}>
                                    EDIT
                                </button>
                            </li>
                        ))
                    }
                </ul>
            :
                    <p>
                        Pas de Resultat
                    </p>

        }
    </div>
  )
}

export default Affiche