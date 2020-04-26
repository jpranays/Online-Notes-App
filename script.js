const navlinks = document.querySelector(".link");
const button = document.querySelector(".button");

button.addEventListener("click", () => {

    navlinks.classList.toggle("open");

})