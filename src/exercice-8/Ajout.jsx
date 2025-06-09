import React, { useState } from 'react';

function Ajout({ addNewResource }) {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation simple avant d'ajouter une ressource
        if (nom.trim() && email.trim()) {
            addNewResource(nom, email);
            setNom('');
            setEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default Ajout;
