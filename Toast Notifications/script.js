const button = document.querySelector('.btn')
const toasts = document.querySelector('.toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener('click', () => createNotification(messages[Math.floor(Math.random() * messages.length)]))

function createNotification(message) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.style.color = chroma.random().hex()
    notif.innerText = `${message}`

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}


