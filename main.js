let name = 'Krzyś';
let age = 34;

console.log('jo ' + name + age);
console.log(`jo ${name} ${age}`);

name = 'Tomcio';

age = 1000;

const element = document.querySelector('.section__item--js');

element.innerHTML = `Ten element wygenerowny został za pomocą JS wraz ze zmiennymi ${name} ${age}`;


function welcome(name, age) {
    console.log(`Witaj. Mam na imię ${name} i mam ${age} lat.`)
}

welcome(name, age);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.menu--js');
    nav.classList.toggle('menu--open')
})