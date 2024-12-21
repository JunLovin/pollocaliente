const body = document.body
const btn = document.getElementById('h-btn')

const changeText = (element, btn) => {
    if(element.className === 'active') {
        btn.innerHTML = 'querico'
    } else {
        btn.innerHTML = 'Cecsito'
    }
}

btn.addEventListener('click', () => {
    body.classList.toggle('active')
    changeText(body, btn)
})