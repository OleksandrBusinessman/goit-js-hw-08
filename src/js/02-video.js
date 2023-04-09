import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VPL_CURRENT_TIME = 'videoplayer-current-time';

const currentTime = JSON.parse(localStorage.getItem(VPL_CURRENT_TIME));

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
  localStorage.setItem(VPL_CURRENT_TIME, JSON.stringify(e.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
