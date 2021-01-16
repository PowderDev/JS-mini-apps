const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseCheck = document.getElementById('uppercase')
const lowercaseCheck = document.getElementById('lowercase')
const numbersCheck = document.getElementById('numbers')
const symbolsCheck = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('clipboard')




const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()?{}[]<>/.,'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(lower, upper, numbers, symbols, length){
    let generatedPassword = ''
    const typesCount = lower + upper + numbers + symbols
    
    
    if(typesCount === 0 ){
        return ''
    }

    for(let i = 0; i < length; i += typesCount){
        const typeArr = _.shuffle([{lower}, {upper}, {numbers}, {symbols}]).filter(item => Object.values(item)[0])
        typeArr.forEach(type =>{
            const funcName = Object.keys(type)[0]
            console.log(funcName);
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}


generateBtn.addEventListener('click', () =>{
    const length = + lengthEl.value
    const hasLower = lowercaseCheck.checked
    const hasUpper = uppercaseCheck.checked
    const hasNumbers = numbersCheck.checked
    const hasSymbols = symbolsCheck.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length)
})

copyBtn.addEventListener('click', () =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
})