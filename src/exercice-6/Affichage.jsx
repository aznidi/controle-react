import React from 'react'

function Affichage({ filtredData, typeFruit, deleteResource }) {
  return (
    <div>
        <hr />
        Type de Recherche {typeFruit}
        <hr />
        <p>
            Listes des resultats
        </p>

        {
            filtredData.length > 0 
            ? 
                <ul>
                    {
                        filtredData.map((fruit, index) => (
                            <li key={index}>
                                {fruit.nom} {" "} <button onClick={() => deleteResource(fruit.nom)}>X</button>
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

export default Affichage