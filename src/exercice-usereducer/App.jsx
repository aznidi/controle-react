import React, { useState, useReducer } from 'react';

const increment = 'INCREMENT';
const decrement = 'DECREMENT';
const maz = 'MAZ';

const addcli = 'ADD';
const supcli = 'SUP';
const editcli = 'EDIT';
const updatecli = 'UPDATE';

const incrementer = (a) => ({ type: increment, payload: a });
const decrementer = (a) => ({ type: decrement, payload: a });
const misazero = () => ({ type: maz });

const ajouterclient = (client) => ({ type: addcli, payload: client });
const suprimerclient = (id) => ({ type: supcli, payload: id });
const editerclient = (client) => ({ type: editcli, payload: client });
const updateclient = (newCli) => ({ type: updatecli, payload: newCli });

const inisializeState = { compteur: 0 };

const countReducer = (state, action) => {
  switch (action.type) {
    case increment:
      return { ...state, compteur: state.compteur + +action.payload };
    case decrement:
      return { ...state, compteur: state.compteur - action.payload };
    case maz:
      return { ...state, compteur: 0 };
    default:
      return state;
  }
};

const inisializeClientState = { clients: [], editedClient: null };

const clientReducer = (state, action) => {
  switch (action.type) {
    case addcli:
      return { ...state, clients: [...state.clients, action.payload] };
    case supcli:
      return {
        ...state,
        clients: state.clients.filter((el) => el.id !== action.payload),
      };
    case editcli:
      return { ...state, editedClient: action.payload };
    case updatecli:
      return {
        ...state,
        clients: state.clients.map((cli) =>
          cli.id === action.payload.id ? action.payload : cli
        ),
        editedClient: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dipsatch] = useReducer(countReducer, inisializeState);
  const [stateClients, dipsatchClient] = useReducer(
    clientReducer,
    inisializeClientState
  );
  const [contentButton, setContentButton] = useState('Ajouter');
  const [step, setStep] = useState(1);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleAddOrUpdateClient = () => {
    if (contentButton === 'Ajouter') {
      if (nom && prenom) {
        dipsatchClient(
          ajouterclient({ id: Date.now(), nom: nom, prenom: prenom })
        );
        setNom('');
        setPrenom('');
      }
    } else if (contentButton === 'Modifier') {
      if (nom && prenom) {
        dipsatchClient(
          updateclient({ id: stateClients.editedClient.id, nom, prenom })
        );
        setNom('');
        setPrenom('');
        setContentButton('Ajouter');
      }
    }
  };

  const handleEditClient = (client) => {
    dipsatchClient(editerclient(client));
    setNom(client.nom);
    setPrenom(client.prenom);
    setContentButton('Modifier');
  };

  return (
    <>
      <fieldset>
        <legend>Gestion de compteur</legend>
        <hr />
        <p>La valeur du count est : {state.compteur}</p>
        <input
          type="number"
          onChange={(e) => setStep(e.target.value)}
          value={step}
        />
        <button onClick={() => dipsatch(incrementer(step))}>incrementer</button>
        <button onClick={() => dipsatch(decrementer(step))}>decrementer</button>
        <button onClick={() => dipsatch(misazero())}>maz</button>
      </fieldset>

      <fieldset>
        <legend>Gestion des clients</legend>
        <div>
          <h5>Ajouter un client :</h5>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <button onClick={handleAddOrUpdateClient}>{contentButton}</button>

          <hr />
          <h5>Liste des clients</h5>
          {stateClients.clients.length !== 0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOM</th>
                    <th>PRENOM</th>
                    <th>SUPPRIMER</th>
                    <th>EDITER</th>
                  </tr>
                </thead>
                <tbody>
                  {stateClients.clients.map((ele) => (
                    <tr key={ele.id}>
                      <td>{ele.id}</td>
                      <td>{ele.nom}</td>
                      <td>{ele.prenom}</td>
                      <td>
                        <button
                          onClick={() => dipsatchClient(suprimerclient(ele.id))}
                        >
                          Supprimer
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleEditClient(ele)}>
                          Éditer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            ''
          )}
        </div>
      </fieldset>
    </>
  );
}

export default App;
