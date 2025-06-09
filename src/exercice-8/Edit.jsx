import React, { useState, useEffect } from 'react';

function Edit({ editedResourceObject, ModifyNewEditedResource }) {
    const [resource, setResource] = useState(editedResourceObject);

    useEffect(() => {
        setResource(editedResourceObject);
    }, [editedResourceObject]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResource({ ...resource, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ModifyNewEditedResource(resource);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={resource.nom || ''}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={resource.email || ''}
                onChange={handleChange}
                required
            />
            <button type="submit">Modifier</button>
        </form>
    );
}

export default Edit;
