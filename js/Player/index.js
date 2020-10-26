import Time from './Time.js';
import Setup from './Setup.js';
import Progress from './Progress.js';
import Animations from './Animations.js';
import PlayerReady from './PlayerReady.js';
import PlayerRender from './PlayerRender.js';
import AudioControllers from './AudioControllers.js';
import PlayerControllers from './PlayerControllers.js';
import HandleFailure from './HandleFailure.js';

export default () => {

  document.querySelectorAll('div[data-type]').forEach((element, index) => {

    const Player = {
      index: index,
      id: element.getAttribute('id') || `my_custom_id_${index}`,
      file: element.getAttribute('file'),
      type: element.getAttribute('data-type'),
      theme: element.getAttribute('data-theme') || "",
      message: element.getAttribute('data-message') || "",
      audioPlayerId: `audio_player_${index}`,
      autoplay: (element.getAttribute('data-autoplay') == 'true') || false,
      element: element
    }

    Player.element.setAttribute('id', Player.id);

    Setup(Player);
    PlayerRender(Player);
    Animations(Player);
    PlayerReady(Player);
    AudioControllers(Player);
    PlayerControllers(Player);
    HandleFailure(Player);
    Time(Player);
    Progress(Player);

  });

};