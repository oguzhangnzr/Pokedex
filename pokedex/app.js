const pokeSearch = document.querySelector('#poke-search');
const searchBtn = document.querySelector('.search-btn');
const pokeContainer = document.querySelector('.poke-container');

const pokeCount = 151;

const initPokemon = async () => {
    for (let i = 1 ; i <= pokeCount ; i++){
    await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createPokemonBox(data);
    
};

const createPokemonBox = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const type = pokemon.types[0].type.name
    const weight = pokemon.weight
    
    const pokeEl = document.createElement('div')
    pokeEl.classList.add('poke-box')

    pokeEl.innerHTML = `
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png">
            <h4 class="poke-name">${name}</h4>
            <p class="poke-id">#${id}</p>
            <p class="poke-type"><b>Type:</b>${type}</p>
            <p class="poke-wei"><b>Weight:</b>${weight}</p>
            `;
            pokeContainer.appendChild(pokeEl);

};
initPokemon();

pokeSearch.addEventListener('input', function(e){
    const search = pokeSearch.value.toLowerCase();
    const pokeNames = document.querySelectorAll('.poke-name');

    pokeNames.forEach((pokeName) => {
        pokeName.parentElement.style.display = 'block';

        if (!pokeName.innerHTML.toLowerCase().includes(search)) {
            pokeName.parentElement.style.display = 'none';
        }

    })

    })