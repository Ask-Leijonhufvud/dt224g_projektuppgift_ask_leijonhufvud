// menu button functionality
const menuButton = document.getElementById("menu-button");
const menu = document.querySelector("nav");

menuButton.addEventListener("click", event => {
    menuButton.classList.toggle("change");
    menu.classList.toggle("show");
}
);