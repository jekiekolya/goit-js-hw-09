// Getting Ref
const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let intervalId = null;

// Generator random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Add listener for start
ref.btnStart.addEventListener('click', startGenerateBodyBgColor);

function startGenerateBodyBgColor(event) {
  intervalId = setInterval(changeBodyBgColor, 1000);
  event.currentTarget.disabled = true;
}

function changeBodyBgColor() {
  ref.body.style.backgroundColor = getRandomHexColor();
}

// Add listener for stop
ref.btnStop.addEventListener('click', stopGenerateBodyBgColor);

function stopGenerateBodyBgColor(event) {
  clearInterval(intervalId);
  ref.btnStart.disabled = false;
}
