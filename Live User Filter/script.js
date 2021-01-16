const resultEl = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = []

filter.addEventListener('input', (e) => filterData(e.target.value))

getData()
async function getData(){
    const res = await fetch('https://randomuser.me/api/?results=250')
    const {results} = await res.json()

    resultEl.innerHTML = ''; 

    results.forEach(user =>{
        const userCard = document.createElement('li')
        console.log(userCard.childNodes[3]);
        listItems.push(userCard)

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="info-user">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.country}, ${user.location.city}</p>
            </div>
        `

        resultEl.appendChild(userCard)

    })
}

function filterData(value){
    listItems.forEach(item =>{
        if(item.children[1].children[0].innerText.toLowerCase().includes(value.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}