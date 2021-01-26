const links = document.querySelectorAll('a');


for (let link of links) {
    link.addEventListener("click", event => {
        document.getElementById('largeImg').src = link;
        console.log(link.href)
        link.src = event.stopPropagation(),event.preventDefault();
        console.log(link.href)
    });
}