const addBtn = document.querySelector('#add')
const body = document.querySelector('body')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
        <div class="tools">
            <span class="save">click to save -></span>
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class='${text ? 'hidden' : ''}'></textarea>
        <div class="time">${getPostTime()}</div>

    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')
    const ClickToSave = note.querySelector('.save')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () =>{
        note.remove()

        updateLS()
    })

    editBtn.addEventListener('click', () =>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

        ClickToSave.innerHTML = `${!main.classList.contains('hidden') ? '' : 'click to save ->'}`
        updateLS()
    })

    textArea.addEventListener('input', (e) =>{
        const {value} = e.target

        main.innerHTML = marked(value)
    })

    body.addEventListener('click', (e) =>{
        if(e.target !== note && e.target !== add && e.target.parentNode !== note && e.target.parentNode.parentNode !== note && e.target.parentNode.parentNode.parentNode !== note){
            main.classList.remove('hidden')
            textArea.classList.add('hidden')

            ClickToSave.innerHTML = `${!main.classList.contains('hidden') ? '' : 'click to save ->'}`
            updateLS()
        }
    })



    document.body.appendChild(note)
}

function getPostTime(){
    const time = new Date()
    console.log(time.getFullYear);
    const postTime = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`

    return postTime
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}