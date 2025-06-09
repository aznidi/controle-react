import React from 'react'
import Client from './Client'
import Commande from './Commande'
import { Provider } from 'react-redux'
import { store } from './Store'

function App() {
  return (
    <>
      <Provider store={store} >
          <fieldset>
            <legend> Gestion des clients</legend>
            <Client />
          </fieldset>
          <br />
          <hr />
          <br />

          <fieldset>
            <legend> Gestion des Commandes</legend>
            <Commande />
          </fieldset>
      </Provider>
    </>
  )
}

export default App