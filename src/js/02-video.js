import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(stopPlayTime, 1000));

function stopPlayTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  });
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);
