export default function (Player) {

  Player.playerController = document.querySelector(`#${Player.audioPlayerId} .player-controller`);


  /** Function to Play/Pause the player **/
  Player.playerController.addEventListener('click', function () {
    let state = false;
    switch (jwplayer(Player.id).getState()) {
      case 'playing':
        state = true;
        break;
      case 'paused':
        state = false;
        break;
      default:
        state = false;
      // return;
    }
    state ? jwplayer(Player.id).pause(true) : jwplayer(Player.id).play(true);
  });


  /** On Play **/
  jwplayer(Player.id).on('play', function () {
    jwplayer(Player.id).setMute(false);
    Player.playerController.classList.add("playing")
    Player.playerController.classList.remove("paused")
    Player.tooggleAnimation(true)
  });


  /** On Pause **/
  jwplayer(Player.id).on('pause', function () {
    Player.playerController.classList.remove("playing")
    Player.playerController.classList.add("paused")
    Player.tooggleAnimation(false)
  });

}