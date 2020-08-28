const nav-links = document.querySelector(".link");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    nav-links.classList.toggle("open");
})
