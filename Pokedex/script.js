const pokeCon = document.querySelector('.poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}



const fetchPoke = async () =>{
    for (let i = 1; i < pokemon_count; i++) {
        await getPoke(i)
        
    }
}

async function getPoke(i){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    const res = await fetch(url)
    const data = await res.json()
    createPokeCard(data);

}

fetchPoke()


function createPokeCard(data){
    const {name, id} = data


    const poke = document.createElement('div')
    poke.classList.add('pokemon')
    poke.style.backgroundColor = colors[`${data.types[0].type.name}`]
    // poke.style.backgroundColor = getColor(data.types[0].type.name)

    poke.innerHTML = `
        <div class="img-container">
            <img src="${data.sprites.other.dream_world.front_default}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">${getId(id)}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${data.types[0].type.name}</span></small>
        </div>
    `

    pokeCon.appendChild(poke)
}

function getId(id){
    if(id < 10){
        return `#00${id}`
    } 
    
    if(id >= 10 && id <= 99){
        return `#0${id}`
    }

    if(id >= 100){
        return `$${id}`
    }
}