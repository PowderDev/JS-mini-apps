const input = document.querySelector('input[type="range"]')

input.addEventListener('input', (e) =>{
    const value = e.target.value
    const label = input.nextElementSibling
    label.innerHTML = value

    const range_width = parseInt(getComputedStyle(e.target).getPropertyValue('width'))
    const label_width = parseInt(getComputedStyle(label).getPropertyValue('width'))

    const left  = value * (range_width / +e.target.max) - label_width / 2

    label.style.left = `${left}px`
    console.log(left);
})