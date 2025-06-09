// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Entree from './Entree';
import Sortie from './Sortie';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Calculatrice Redux</h1>
        <Entree />
        <Sortie />
      </div>
    </Provider>
  );
};

export default App;
