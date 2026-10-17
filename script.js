//your JS code here. If required.

const text = document.getElementById("text");
const speedInput = document.getElementById("speed");

const message = "We love Programming!";
let index = 0;
let timer;

function renderText() {
    clearTimeout(timer);

    const speed = Math.min(10, Math.max(1, Number(speedInput.value) || 1));
    const delay = 500 / speed;

    if (index < message.length) {
        text.innerText = message.slice(0, index + 1);
        index++;

        timer = setTimeout(renderText, delay);
    }
}

function startText() {
    clearTimeout(timer);
    index = 0;
    text.innerText = "";
    renderText();
}

speedInput.addEventListener("input", startText);

startText();
