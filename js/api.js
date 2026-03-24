const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemons(limit = 50, offset = 0) {
    try {
        const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: Status ${response.status}`);
        }
        const data = await response.json();
        return data.results; 
        
    } catch (error) {
        console.error("Falha ao buscar os Pokémon na API:", error);
        throw error; 
    }
}