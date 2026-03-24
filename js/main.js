const pokemonGrid = document.getElementById('pokemonGrid');
const loadingState = document.getElementById('loading');
const errorState = document.getElementById('errorState');

let allPokemons = [];

async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return await response.json();
}

async function loadPokemons() {
    try {
        loadingState.classList.remove('hidden');
        pokemonGrid.innerHTML = '';

        const basicList = await fetchPokemons(50);
        const detailPromises = basicList.map(pokemon => fetchPokemonDetails(pokemon.url));

        allPokemons = await Promise.all(detailPromises);

        renderPokemons(allPokemons);
        calculateTotalPower(allPokemons);

    } catch (error) {
        console.error("Erro na renderização:", error);
        errorState.classList.remove('hidden');
    } finally {
        loadingState.classList.add('hidden');
    }
}

function renderPokemons(pokemonList) {
    const html = pokemonList.map(pokemon => {
        const typesHtml = pokemon.types.map(t => 
            `<span class="type ${t.type.name}">${t.type.name}</span>`
        ).join('');
        return `
            <div class="card">
                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                <span class="number">#${String(pokemon.id).padStart(3, '0')}</span>
                <h2>${pokemon.name}</h2>
                <div class="types">
                    ${typesHtml}
                </div>
            </div>
        `;
    }).join('');

    pokemonGrid.innerHTML = html;
}

loadPokemons();

const typeButtons = document.querySelectorAll('.filters .btn');

typeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        typeButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const selectedType = e.target.getAttribute('data-type');
        const emptyState = document.getElementById('emptyState');

        if (selectedType === 'all') {
            renderPokemons(allPokemons);
            calculateTotalPower(allPokemons);
            emptyState.classList.add('hidden');
        } else {
            const filteredPokemons = allPokemons.filter(pokemon => {
                return pokemon.types.some(t => t.type.name === selectedType);
            });

            if (filteredPokemons.length === 0) {
                pokemonGrid.innerHTML = '';
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
                renderPokemons(filteredPokemons);
            }
            
            calculateTotalPower(filteredPokemons);
        }
    });
});

function calculateTotalPower(pokemonList) {
    const totalPowerElement = document.getElementById('totalPower');
    
    const total = pokemonList.reduce((acumulador, pokemon) => {
        const power = pokemon.base_experience || 0; 
        return acumulador + power;
    }, 0);

    totalPowerElement.textContent = total;
}