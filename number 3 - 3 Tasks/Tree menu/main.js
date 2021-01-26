let spans = document.getElementsByClassName('span');

for (let span of spans) {
    span.addEventListener("click", event => {
        span.parentElement.querySelector(".new-list").classList.toggle("active");
        span.classList.toggle("span-open");
    });
};