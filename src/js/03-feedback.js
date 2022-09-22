const throttle = require('lodash.throttle');

// Get ref
const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

const feedback = {};

//1) Add event listener on form input
form.addEventListener('input', onFormInput);
//4) Add event listener on form input for set local storage through 1s.
form.addEventListener('input', throttle(setFeedbackFormState, 500));

function onFormInput(event) {
  let { email, message } = event.currentTarget;
  feedback.email = email.value;
  feedback.message = message.value;
}
function setFeedbackFormState() {
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

//2) Autofill form from local storage
function getFeedbackFormState() {
  return JSON.parse(localStorage.getItem('feedback-form-state'));
}
if (getFeedbackFormState()) {
  email.value = getFeedbackFormState().email;
  message.value = getFeedbackFormState().message;
}

//3) Add event listener on form submit
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(getFeedbackFormState());
  form.reset();
  localStorage.clear();
}
