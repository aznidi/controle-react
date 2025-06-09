import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Affichage from './Affichage';
import '../index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Affichage />
    </Provider>
  );
};

export default App;
