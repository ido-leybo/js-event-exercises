const links = document.querySelectorAll('a');

for (let link of links) {
    link.addEventListener("click", event => {
        let yesOrNo = confirm("You want to move to: " + link);
        if (!yesOrNo) {
            link.setAttribute("href", '#');
        } 
    });
};


