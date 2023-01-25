const header = document.getElementById('header')
const nav = document.getElementById('nav')
const burger = document.getElementById('burger')


window.addEventListener('scroll',()=>{
    if(window.scrollY >=100){
        header.classList.add('shadow-lg')
    }else{
        header.classList.remove('shadow-lg')
    }
})


burger.addEventListener('click', ()=>{
    nav.classList.toggle('navToggle')
    nav.classList.toggle('hidden')
    nav.classList.toggle('shadow-lg')
})