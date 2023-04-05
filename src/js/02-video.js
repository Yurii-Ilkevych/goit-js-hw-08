import Vimeo from '@vimeo/player';
import Lodash from 'lodash.throttle';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const myFirstPlayer = new Vimeo(iframe, {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
});

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

myFirstPlayer.on('timeupdate', throttle(onPlay, 1000));

myFirstPlayer
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
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
