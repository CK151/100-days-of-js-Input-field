//variables

const count = document.querySelector(".initial"),
    input = document.querySelector("input");



input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
})


