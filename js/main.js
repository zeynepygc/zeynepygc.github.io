function playIcon() {
  return `<span class="play-icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3 2l11 6-11 6V2z" />
    </svg>
  </span>`;
}

function linkList(links = {}) {
  const labels = { itch: "itch.io", github: "GitHub", video: "Video" };
  return Object.keys(links)
    .filter((key) => links[key])
    .map((key) => `<a href="${links[key]}" target="_blank" rel="noopener">${labels[key] || key}</a>`)
    .join("");
}

// Decide what the media area's trigger looks like, based on what the game provides:
// - game.video    -> a button that swaps the thumbnail for an inline <video>
// - game.playUrl  -> a link that opens the Unity Play page in a new tab
// - neither       -> no trigger, just the static thumbnail
function mediaTriggerHTML(game) {
  if (game.video) {
    return `<button class="play-button" type="button" aria-label="Watch gameplay clip of ${game.title}">
      ${playIcon()}
      <span>Watch gameplay clip</span>
    </button>`;
  }
  if (game.playUrl) {
    return `<a class="play-button" href="${game.playUrl}" target="_blank" rel="noopener" aria-label="Play ${game.title} on Unity Play">
      ${playIcon()}
      <span>Play on Unity Play</span>
    </a>`;
  }
  return "";
}

function renderGame(game, index) {
  const row = document.createElement("article");
  row.className = "game-row" + (index % 2 === 1 ? " reverse" : "");

  row.innerHTML = `
    <div class="game-media">
      <img