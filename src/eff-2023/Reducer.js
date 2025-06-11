const initState = {  
    listeSimulations: []
}

const SimulationReducer = (state = initState, { type, payload }) =>
{
    switch (type)
    {
        case 'AJOUTER':
            return { listeSimulations: [...state.listeSimulations, payload] };
        case 'VIDER':
            return { listeSimulations: [] };
        default:
            return state;
    }
}

export default SimulationReducer;