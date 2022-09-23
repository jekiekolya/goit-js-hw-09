import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Getting ref
const ref = {
  btnStart: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
  input: document.querySelector('input'),
};
// Variables
let selectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    checkInputDates();
  },
};
let intervalId = null;
// Settings library flat picker
flatpickr('input#datetime-picker', options);

// Validate input datas
function btnStartIsActive(isActive) {
  ref.btnStart.disabled = !isActive;
}

btnStartIsActive(false);

function checkInputDates() {
  if (Date.now() > selectedDate) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  Notify.success('You can start a timer for the BOOM 💣!!!;)');
  btnStartIsActive(true);
}

//Settings countdown
// Add event listener on Btn fot start
ref.btnStart.addEventListener('click', startBtnClickHandler);

function startBtnClickHandler(event) {
  intervalId = setInterval(getTimeToFinish, 1000);
  btnStartIsActive(false);
}

function getTimeToFinish() {
  let timeDifference = selectedDate - Date.now();
  if (timeDifference < 0) return;
  let dateObj = addLeadingZero(convertMs(timeDifference));
  makeTimeMarkup(dateObj);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  let { days, hours, minutes, seconds } = value;
  days = days.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  return { days, hours, minutes, seconds };
}

function makeTimeMarkup({ days, hours, minutes, seconds }) {
  ref.dataDays.textContent = days;
  ref.dataHours.textContent = hours;
  ref.dataMinutes.textContent = minutes;
  ref.dataSeconds.textContent = seconds;
}

ref.input.addEventListener('change', e => {
  clearInterval(intervalId);
  let dateObj = addLeadingZero(convertMs(0));
  makeTimeMarkup(dateObj);
});
