import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const startBtn = document.querySelector('button[data-start]');
const dateChosen = document.querySelector('#datetime-picker');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');
const divEl = document.querySelector(".timer");



let timer = null;
let nowDate = null;

//flatpickr

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDate) {
        // const currentDate = new Date();
        if (selectedDate[0] < new Date()) {
            startBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtn.disabled = false;
            startBtn.addEventListener('click', countdownTime);
            nowDate = selectedDate[0];
        }
    },
};

// time counter
function countdownTime() {
    timer = setInterval(() => {
        startBtn.disabled = true;
        const timeLeft = nowDate - new Date();
        const { days, hours, minutes, seconds } = convertMs(timeLeft);
        day.innerHTML = addZero(days);
        hour.innerHTML = addZero(hours);
        minute.innerHTML = addZero(minutes);
        second.innerHTML = addZero(seconds);
        if (timeLeft < 1000) {
            clearInterval(timer);
            startBtn.disabled = false;
        }
    }, 1000);
}

// addLeadingZero
function addZero(number) {
    return String(number).padStart(2, 0);
}

// convert 
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
};

// add style for timer
divEl.style.display = "flex";
divEl.style.gap = "15px"
divEl.style.marginTop = "20px"
divEl.style.width = "300px"
divEl.style.backgroundColor = "rgb(36%, 33%, 81%, 0.5)"

flatpickr(dateChosen, options);