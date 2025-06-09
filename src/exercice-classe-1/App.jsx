import React from 'react'
import Client from './Client'
import Commande from './Commande'
import { Provider } from 'react-redux'
import { store } from './Store'

function App() {
  return (

    <>
    <Provider store={store}>
    <fieldset>
        <legend>gestion clients</legend>
        
        <Client></Client>

    </fieldset>
    <fieldset>
        <legend>gestion clients</legend>
        <Commande></Commande>

    </fieldset>
    </Provider>
    </>
  )
}

export default App