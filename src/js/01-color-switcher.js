const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyStyle = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", () => {
    startTimer();
});

stopBtn.addEventListener("click", () => {
    stopTimer()
});

let timerId = undefined;

function changecolour() {
    bodyStyle.style.backgroundColor = getRandomHexColor();
}

function startTimer() {
    timerId = setInterval(() => {
        changecolour();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timerId);
}