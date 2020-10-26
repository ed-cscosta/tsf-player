export default function (Player) {

  Player.equalizer = document.querySelector(`#${Player.audioPlayerId} .equalizer`);

  /** Function to render the equalizer **/
  Player.loadBars = function () {
    Player.equalizer.innerHTML = "";
    var nBars = Math.floor(Player.equalizer.clientWidth / 15);
    for (var i = 0; i <= nBars; i++) {
      var element = document.createElement("span")
      element.classList.add("item")
      element.classList.add("stop")
      element.setAttribute("style", `animation-delay: -${i}.${Math.round(Math.random() * 10)}s;`)
      Player.equalizer.appendChild(element)
    }
    if (jwplayer(Player.id).getState() === "playing") {
      Player.tooggleAnimation(true);
    }
  }


  /** Toogle equalizer animation **/
  Player.tooggleAnimation = function (value) {
    if (Player.equalizer.innerHTML === "") {
      Player.loadBars();
    }
    var bars = document.querySelectorAll(`#${Player.audioPlayerId} .equalizer .item`);
    bars.forEach(function (el) {
      value ? el.classList.remove('stop') : el.classList.add('stop')
    });
  }


  /** Re-Render equalizer when resize window */
  window.addEventListener('resize', function () {
    Player.loadBars();
  });

}