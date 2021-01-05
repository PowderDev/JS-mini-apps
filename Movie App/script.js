const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fbbe35dbf5d45bd7a7eb389eda6ca1cc&page=1;`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=fbbe35dbf5d45bd7a7eb389eda6ca1cc&query="';
const form = document.querySelector('form');
const search = document.querySelector('.search');
const main = document.querySelector('main')

getMovies(API_URL)


async function getMovies(url){
    await fetch(url)
        .then(res => res.json())
        .then(data => showMovies(data.results))

    console.log(API_URL);
}


function showMovies(movies){
    main.innerHTML = ''

    movies.forEach(movie =>{
        const {title, poster_path, vote_average, overview} = movie;
        movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML =`
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getVote(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
        `
        main.appendChild(movieEl)
    })
}

function getVote(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote < 8 && vote >=5){
        return 'orange'
    }else{
        return 'red'
    }
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const seatchTerm = search.value

    if(seatchTerm && seatchTerm !== ''){
        getMovies(SEARCH_URL + seatchTerm)
        search.value = ''
    }else{
        window.location.reload()
    }
})
