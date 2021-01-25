let button = document.getElementById('button');
//Show
button.addEventListener("click", () => alert("1"));
//Not show
button.removeEventListener("click", () => alert("1"));
//Show
button.onclick = () => alert(2);

