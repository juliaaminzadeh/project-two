var button = document.querySelector("#toggle");
var items = document.querySelector("#items");

function toggle() {
    items.classList.toggle("active1");
}
button.addEventListener("click", toggle);
