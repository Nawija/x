const loader = document.querySelector('.loader')
const content = document.querySelector('.content')

window.addEventListener('load',()=>{
    loader.classList.add('hidden')
    content.classList.remove('hidden')
})