const hamburgerIcon = document.querySelector('#hamburger');
const navContainer = document.querySelector('.nav-list');

const closeIcon = document.querySelector('#close');
const closeBg = document.querySelector('.nav-close-bg');

const cartIcon = document.querySelector('#cart');
const cartContainer = document.querySelector('.cart');

hamburgerIcon.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    closeBg.classList.toggle('close');
});

closeIcon.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    document.querySelector('.nav-close-bg').classList.toggle('close');
});

closeBg.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    document.querySelector('.nav-close-bg').classList.toggle('close');
});

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('close');
});