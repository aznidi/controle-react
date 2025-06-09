import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from '../../node_modules/react-router-dom';
import App from './App';

describe('App routing and components', () => {
  test('renders Home page at "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que la page d'accueil est affichée
    expect(screen.getByText(/Bienvenue sur la page d'accueil/i)).toBeInTheDocument();
  });

  test('renders Clients page at "/clients" route', () => {
    render(
      <MemoryRouter initialEntries={['/clients']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que la liste des clients est affichée
    expect(screen.getByText(/Liste des clients/i)).toBeInTheDocument();
    expect(screen.getByText(/Alice Dupont/i)).toBeInTheDocument();
    expect(screen.getByText(/Bob Martin/i)).toBeInTheDocument();
    expect(screen.getByText(/Charlie Durand/i)).toBeInTheDocument();
  });

  test('renders Client detail page at "/client/:id" route', () => {
    render(
      <MemoryRouter initialEntries={['/client/1']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que les détails du client 1 sont affichés
    expect(screen.getByText(/Détails du client/i)).toBeInTheDocument();
    expect(screen.getByText(/Alice Dupont/i)).toBeInTheDocument();
  });

  test('renders not found message for invalid client id', () => {
    render(
      <MemoryRouter initialEntries={['/client/999']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que le message de client introuvable est affiché
    expect(screen.getByText(/Client introuvable/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Vérifie que les liens de navigation sont présents
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/Clients/i)).toBeInTheDocument();
  });
});
