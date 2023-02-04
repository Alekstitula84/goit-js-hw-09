const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');

const bodyStyle = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        changecolour();
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);

});


function changecolour() {
    bodyStyle.style.backgroundColor = getRandomHexColor();
}
