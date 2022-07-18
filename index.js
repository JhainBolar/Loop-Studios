const toggleOpen = document.querySelector('.open')
const big = document.querySelector('.big')
const toogleClose = document.querySelector('.close')
const navBar = document.querySelector('.nav')
const container = document.querySelector('.nav-container')


toggleOpen.addEventListener('click', () => {
   navBar.classList.toggle('active')
   container.classList.toggle('activee')
   big.classList.toggle('ach')
    
})
