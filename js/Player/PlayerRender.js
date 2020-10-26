export default function (Player) {
  document.getElementById(Player.id).outerHTML = `
  <div class="player-container ${Player.theme}" id="audio_player_${Player.index}">
    <span class="player-controller paused">
        <div class="player-animation"></div>
    </span>
    <div class="player-information">
        <div class="volume-controller">
            <input class="input-volume" type="range" max="100" value="80" min="0" step=1>
            <span class="mute">
                <img src="img/sound.svg">
                <img class="hide" src="img/mute.svg">
            </span>
        </div>
        <p class="message">${Player.message}</p>
        <div class="equalizer"></div>
        <div class="timeline">
            <input class="progress" type="range" min="0" max="0" value="0" style="--min: 0;--max: 100;--val: 0;">
            <div class="buffer"></div>
            <span class="current">00:00</span>
            <span class="end">00:00</span>
        </div>
    </div>
    <div class="player">
    </div>
  </div>
`;
  document.querySelector(`#audio_player_${Player.index} .player`).appendChild(Player.element);

}