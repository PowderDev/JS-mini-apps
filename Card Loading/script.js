let title, text, id, name, email, url, port, can;
const card = document.querySelector('.card');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


createCard()
async function getData(){
    await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 10)}`)
    .then((response) => response.json())
    .then((json) => {
         title = json.title
         text = json.body
         id = json.id
    });

    await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  .then((response) => response.json())
  .then((json) => url = json.url);

  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then((json) => {
    name = json.name
    email = json.email
  });

  await fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((json) =>port = json.results[0].picture.medium)
  .catch((err) => console.log('Что-то пошло не так'))
  
}
function checkText(text, tit = undefined){
    let tx = text
    if(tx.length > 22){
        tx = text.split(' ').splice(0, 23).join(' ') + '...'
    }

    if(tit){
        if(text.length > 6){
            tx = text.split(' ').splice(0, 6).join(' ') + '...'
            
        }
    }
    return tx
}

function clear(){
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

async function createCard(){
    await getData();
    const timer = setTimeout(() =>{
            card.innerHTML = '';
            
            card.innerHTML = `
                <div class="card-header">
                    <img src="${url}" alt="">
                </div>

                <div class="card-content">
                    <h3 class="card-title" >
                        ${checkText(title, 'da')}
                    </h3>
                    <p class="card-excerpt" >${checkText(text)}</p>
                    <div class="author">
                        <div class="profile-img" >
                            <img src="${port}" alt="">
                        </div>
                        <div class="author-info">
                            <strong  >${name}</strong>
                            <small  >${email}</small>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(card)
            clearTimeout(timer)
    },2000)


    

}


