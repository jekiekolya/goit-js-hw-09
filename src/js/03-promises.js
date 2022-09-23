import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Getting ref
const ref = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};
let delay = null;
let step = null;
let amount = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// Submit form
ref.form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  getInputValue();
  for (let i = 0; i < amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${++position} in ${delay}ms`, {
          useIcon: false,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${++position} in ${delay}ms`, {
          useIcon: false,
        });
      });
    delay += step;
  }
}

function getInputValue() {
  delay = ref.inputDelay.value * 1;
  step = ref.inputStep.value * 1;
  amount = ref.inputAmount.value * 1;
}
