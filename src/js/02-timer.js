import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Getting ref
const ref = {
  btnStart: document.querySelector('button[data-start]'),
};

// Variables
let selectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    checkInputDates();
  },
};
// Settings library
flatpickr('input#datetime-picker', options);

// Validate input datas
function btnStartIsActive(isActive) {
  ref.btnStart.disabled = !isActive;
}

btnStartIsActive(false);

function checkInputDates() {
  if (Date.now() > selectedDate) {
    window.alert('Please choose a date in the future');
    return;
  }
  btnStartIsActive(true);
}

//Settings countdown
