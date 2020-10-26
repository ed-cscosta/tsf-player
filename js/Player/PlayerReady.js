export default function (Player) {

  /** On Player Ready **/
  jwplayer(Player.id).on('ready', function () {
    // var width = document.getElementById(audioPlayerId).offsetWidth
    var width = window.innerWidth;
    if (width <= 700) {
      jwplayer(Player.id).resize(300, 168)
    } else if (width < 1280) {
      jwplayer(Player.id).resize(700, 393)
    } else {
      jwplayer(Player.id).resize(800, 450)
    }
    if (Player.autoplay) {
      jwplayer(Player.id).play(true)
    }
    Player.loadBars();
    jwplayer(Player.id).setMute(false);
  });

}