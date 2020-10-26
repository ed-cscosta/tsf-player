export default function (Player) {

  Player.progress = document.querySelector(`#${Player.audioPlayerId} .progress`);

  /** Stream Time **/
  jwplayer(Player.id).on('time', function (value) {
    Player.progress.value = value.currentTime;
    Player.progress.style.setProperty('--val', +value.currentTime)
    document.querySelector(`#${Player.audioPlayerId} .current`).innerHTML = Player.timeConverter(value.currentTime)
    Player.progress.max = value.duration;
    Player.progress.style.setProperty('--max', +value.duration)
    document.querySelector(`#${Player.audioPlayerId} .end`).innerHTML = Player.timeConverter(value.duration)
    document.querySelector(`#${Player.audioPlayerId} .buffer`).style.width = jwplayer(Player.id).getBuffer() + "%";
  });

  Player.timeConverter = function (value) {
    var round = Math.floor(value);
    var hrs = Math.floor(round / 3600);
    var min = Math.floor((round - hrs * 3600) / 60);
    var seconds = round - hrs * 3600 - min * 60;
    seconds = Math.round(seconds * 100) / 100;

    var result = "";
    if (hrs > 0) {
      result += hrs < 10 ? "0" + hrs + ":" : hrs + ":";
    }
    result += min < 10 ? "0" + min : min;
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
  }

}