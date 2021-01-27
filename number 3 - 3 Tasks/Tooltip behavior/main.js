const buttons = document.querySelectorAll('button');
const tooltip1 = document.getElementById('tool');
const tooltip2 = document.getElementById('tool2');

tooltip1.hidden = true;
tooltip2.hidden = true;

for (let button of buttons) {
    button.addEventListener("mouseover", event => {
        if (button.className === 'tool') {
            tooltip1.hidden = false;
        } else if (button.className === 'tool2') {
            tooltip2.hidden = false;
        };
        button.addEventListener("mouseout", event => {
        tooltip1.hidden = true;
        tooltip2.hidden = true;
        });
    });
};