const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('.user-form')
const search = document.querySelector('.search')
const main = document.querySelector('main')

async function getUser(username){
    try{
        const {data} = await axios(APIURL + username)
        createUserCard(data);
        getRepos(username)
    }catch(e){
        if(e.response.status == 404){
            createErrorCard('No profile with this user name')
        }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + '/repos?sort=created')
        addRepos(data);
    }catch(e){
            createErrorCard('Problem fetching repos')
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const user = search.value 

    if(user){
        getUser(user)

        search.value = ''
    }
})

function createUserCard(user){
    const {bio , avatar_url, html_url, followers, public_repos, following, login, name} = user

    const cardHTML = `
        <div class="card">
            <div>
                <img src=${avatar_url} alt=${login} class="avatar">
            </div>
            <div class="user-info">
                <h2><a href=${html_url}>${name}</a></h2>
                <p>${bio}</p>
                <ul>
                    <li>${followers} <strong>folowers</strong></li>
                    <li>${following}<strong>folowing</strong></li>
                    <li>${public_repos} <strong>Repos</strong></li>
                </ul>

                <div class="repos">
                </div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}


function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addRepos(repos){
    const reposEl = document.querySelector('.repos')

    repos.slice(0,10).forEach(repo =>{
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerHTML = repo.name

        reposEl.appendChild(repoEl)
    })
}