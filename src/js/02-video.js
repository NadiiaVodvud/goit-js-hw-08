import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onPlay = function (data) {
  console.log(videoplayer - current - time);
};
// 'videoplayer-current-time';
// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

player.on('play', onPlay);

// player.on('eventName', function (data) {
//   // data is an object containing properties specific to that event
// });

// const player = new Player('handstick', {

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
