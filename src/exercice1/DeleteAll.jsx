import React from 'react'

function DeleteAll({totalMessages, resetArrayMessages}) {
  return (
    <div className='container'>
        <p>
            Nombre des messages: {` ${totalMessages}`}
        </p>
        <hr />
        <button onClick={() => resetArrayMessages([])}>
            Supprimer tous les messages
        </button>
    </div>
  )
}

export default DeleteAll