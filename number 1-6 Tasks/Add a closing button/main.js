const paragraph = document.getElementById('pane');
const paragraph2 = document.getElementById('pane2');
const paragraph3 = document.getElementById('pane3');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
console.log(paragraph)

button.addEventListener("click", event => {
    paragraph.hidden = true;
    button.hidden = true;
});

button2.addEventListener("click", event => {
    paragraph2.hidden = true;
    button2.hidden = true;
});

button3.addEventListener("click", event => {
    paragraph3.hidden = true;
    button3.hidden = true;
});
