const count = document.querySelector(".count-number");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.textContent == "-") {
            count.textContent = count.textContent - 1;
        } else {
            count.textContent = Number(count.textContent) + 1;
        }

        if (count.textContent > 0) {
            count.style.color = "lime";
        } else if (count.textContent < 0) {
            count.style.color = "red";
        } else {
            count.style.color = "grey";
        }
    });
});

window.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key == "-") {
        if (event.altKey == true) {
            count.textContent = count.textContent - 10;
        } else {
            count.textContent = count.textContent - 1;
        }
    } else if (event.key == "+") {
        if (event.altKey == true) {
            count.textContent = Number(count.textContent) + 10;
        } else {
            count.textContent = Number(count.textContent) + 1;
        }
    }

    if (count.textContent > 0) {
        count.style.color = "lime";
    } else if (count.textContent < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "grey";
    }
});
