import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VPL_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = JSON.parse(localStorage.getItem(VPL_CURRENT_TIME));

if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem(VPL_CURRENT_TIME, JSON.stringify(e.seconds));
}
