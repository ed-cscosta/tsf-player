export default function (Player) {

  const volume = document.querySelector(`#${Player.audioPlayerId} .input-volume`);
  const mute = document.querySelector(`#${Player.audioPlayerId} .mute`);


  /** On Change Volume **/
  volume.addEventListener('input', function (event) {
    const vol = parseInt(event.target.value);
    if (vol === 0) {
      jwplayer(Player.id).setMute(true);
    } else {
      jwplayer(Player.id).setVolume(vol);
    }
  })


  /** On Mute **/
  mute.addEventListener('click', function () {
    jwplayer(Player.id).setMute();
  })


  /** Mute Animation Controller **/
  jwplayer(Player.id).on('mute', function (state) {
    if (state.mute) {
      mute.querySelectorAll('img')[0].classList.add('hide');
      mute.querySelectorAll('img')[1].classList.remove('hide');
    } else {
      mute.querySelectorAll('img')[1].classList.add('hide');
      mute.querySelectorAll('img')[0].classList.remove('hide');
    }
  })
}