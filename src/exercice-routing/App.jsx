import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Client from './Client';
import Clients from './Clients';
import Home from './Home';
import Commandes from './Commandes';

function App() {
    // Liste des clients à partager entre les composants
    const clients = [
      { id: 1, name: 'Alice Dupont' },
      { id: 2, name: 'Bob Martin' },
      { id: 3, name: 'Charlie Durand' },
    ];
  
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/clients">Clients</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client/:id" element={<Client />} />
          <Route path="/client/commandes/:id" element={<Commandes />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App