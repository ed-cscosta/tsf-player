export default function (Player) {

  /** On Select Time Value **/
  Player.progress.addEventListener('input', function (event) {
    jwplayer(Player.id).pause()
    jwplayer(Player.id).seek(event.target.value)
    Player.progress.setAttribute('value', event.target.value)
  });


  /** Buffer Change **/
  jwplayer(Player.id).on('bufferChange', function (value) {
    Player.progress.max = value.duration;
    Player.progress.style.setProperty('--max', +value.duration)
    document.querySelector(`#${Player.audioPlayerId} .end`).innerHTML = Player.timeConverter(value.duration)
    document.querySelector(`#${Player.audioPlayerId} .buffer`).style.width = value.bufferPercent + "%";
    hasBuffer = true;
  });


  /** On Seeked **/
  jwplayer(Player.id).on('seeked', function () {
    jwplayer(Player.id).play()
  })

}