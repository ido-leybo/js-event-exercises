const button = document.getElementById("button");
const ul = document.querySelector('ul');
const after = document.getElementById('after');
const before = document.getElementById('before');
        
ul.hidden = true;
after.hidden = true

button.addEventListener("click", event => {
    if (ul.hidden === true) {
        ul.hidden = false;
        after.hidden = false;
        before.hidden = true;
    } else {
        ul.hidden = true;
        after.hidden = true;
        before.hidden = false;
    }
});

