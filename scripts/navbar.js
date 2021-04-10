var button = document.querySelector("#toggle");
var items = document.querySelector("#items");

function toggle() {
    items.classList.toggle("active");
}
button.addEventListener("click", toggle);
