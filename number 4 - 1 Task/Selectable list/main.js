const ul = document.getElementById('ul');

ul.onmousedown = () => false;
ul.addEventListener('click', event => {
    //if it without ctrl, this remove from all other "li" the color
    if (!event.ctrlKey) {
        for (let li of ul.children) {
            li.classList.remove('selected');
        }
    }
    if (event.target.tagName !== 'LI') {
        return;
    }
    // add the class of the color to the "li" that clicked
    event.target.classList.add('selected');
});