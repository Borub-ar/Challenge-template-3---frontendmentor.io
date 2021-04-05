
const toggler = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');
const theme = document.querySelector('.top-theme');
const mainHeader = document.querySelector('.main-header')
const secondHeader = document.querySelector('.second-header')
const numbers = document.querySelectorAll('.number-big, .number-small')
const card = document.querySelectorAll('.card-top, .card, .dark-layer')
const togg = document.querySelector('.slider');


toggler.addEventListener('click', () => {
    theme.classList.toggle('top-dark-mode');
    body.classList.toggle('body-dark-mode');
    mainHeader.classList.toggle('m-dark-mode');
    secondHeader.classList.toggle('s-dark-mode');
    for (let i of numbers) {
        i.classList.toggle('number-dark-mode');
    }
    for (let i of card) {
        i.classList.toggle('card-dark-mode');
    }
    togg.classList.toggle('slider-dark-mode');
})