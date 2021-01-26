const links = document.querySelectorAll('a');
console.log(links);

for (let link of links) {
    link.addEventListener("click", event => {
        let yesOrNo = confirm("You want to move to: " + link);
        console.log(yesOrNo)
        if (yesOrNo) {
            return true;
        } else {
            event.stopPropagation();
            event.preventDefault();
        }
    });    
};


