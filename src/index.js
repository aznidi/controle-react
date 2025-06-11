import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './eff-2023/App';
import { Provider } from 'react-redux';
import store from './eff-2023/store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
       <BrowserRouter>
       <Provider store={store} >
              <App />
       </Provider>
       
       </BrowserRouter>
        
);
