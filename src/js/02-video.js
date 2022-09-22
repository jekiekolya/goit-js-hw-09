import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

// get ref
const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
console.log(iframePlayer);

// Write current time to local storage
iframePlayer.on('timeupdate', throttle(writeCurrentTimeToLocalStorage, 1000));

function writeCurrentTimeToLocalStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
// Start video from current time
const currentTime = localStorage.getItem('videoplayer-current-time');
iframePlayer
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
