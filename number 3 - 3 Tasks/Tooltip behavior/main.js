const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener("mouseover", () => {
    button1.setAttribute("data-toggle", "tooltip");
    button1.setAttribute("title", "the tooltip is longer than the element");
});
button2.addEventListener("mouseover", () => {
    button2.setAttribute("data-toggle", "tooltip");
    button2.setAttribute("title", "HTML\ntooltip");
});
button1.addEventListener("mouseout", () => {
    button1.removeAttribute("data-toggle");
    button1.removeAttribute("title");
});
button2.addEventListener("mouseout", () => {
    button2.removeAttribute("data-toggle");
    button2.removeAttribute("title");
});