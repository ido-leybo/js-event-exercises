const div = document.getElementById('container');

div.addEventListener("click", event => {
    //if what clicked isn't a button don't do nothing
    if (event.target.className !== 'remove-button') {
        return;
    };
    // if what clicked is a button- the close value with the class name "pane" remove
    let pane = event.target.closest('.pane');
    pane.remove();
});
    
