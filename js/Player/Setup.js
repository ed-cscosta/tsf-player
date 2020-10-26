export default function (Player) {

  jwplayer(Player.id).setup({
    file: Player.file,
    autostart: Player.autoplay,
  });

  return Player;
}