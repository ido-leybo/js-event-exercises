const menu = document.getElementById('menu');
const paragraph = document.getElementById('para');
let startLogo = document.getElementById('start');
let afterLogo = document.getElementById('after');
let ul = document.querySelector('ul');

ul.style.display = 'none';
afterLogo.style.display = 'none';

paragraph.addEventListener("click", event => {
    afterLogo.style.display = 'inline';
    startLogo.style.display = 'none';
    ul.style.display = 'block';
    paragraph.addEventListener('click', event => {
        afterLogo.style.display = 'none';
        startLogo.style.display = 'inline';
        ul.style.display = 'none';
    });
});

