// const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow"
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered"
    } else {
        count.style.color = "#fff"
    }
}



// add.addEventListener("click", () => {
//     count.innerHTML++;
// })

// subtract.addEventListener("click", () => {
//     count.innerHTML--;
// })

// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
// })