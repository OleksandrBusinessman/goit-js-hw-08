import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player
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

const onPlay = function (e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
