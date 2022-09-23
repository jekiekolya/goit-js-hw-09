// Getting ref
const ref = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// Submit form
ref.form.addEventListener('submit');
