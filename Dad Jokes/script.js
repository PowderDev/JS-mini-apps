const joke = document.querySelector('.joke'),
      btn = document.querySelector('.btn')


const config ={
    headers:{
       Accept: "application/json",
    }
}

async function getJoke(){
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    const data = await res.data.joke 
    joke.innerHTML = `${data}`
}

btn.addEventListener('click', getJoke); 