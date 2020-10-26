export default function (Player) {

  /** Play Fail Handler **/
  jwplayer(Player.id).on('playAttemptFailed', function () {
    Player.playerController.classList.toggle("playing")
    Player.playerController.classList.toggle("paused")
    Player.tooggleAnimation(true)
  });

}