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

function renderGame(game, index) {
  const row = document.createElement("article");
  row.className = "game-row" + (index % 2 === 1 ? " reverse" : "");

  row.innerHTML = `
    <div class="game-media">
      <img class="thumb" src="${game.thumb}" alt="Screenshot of ${game.title}" loading="lazy" />
      <button class="play-button" type="button" aria-label="Play ${game.title}">
        ${playIcon()}
        <span>Play in browser</span>
      </button>
    </div>
    <div class="game-info">
      <h3>${game.title}</h3>
      <p class="game-tagline">${game.tagline}</p>
      <p class="game-desc">${game.description}</p>
      <ul class="tag-list">
        ${game.tags.map((t) => `<li>${t}</li>`).join("")}
      </ul>
      <div class="game-links">${linkList(game.links)}</div>
    </div>
  `;

  const media = row.querySelector(".game-media");
  const button = row.querySelector(".play-button");

  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = game.buildPath;
    iframe.setAttribute("allow", "autoplay; fullscreen");
    iframe.setAttribute("allowfullscreen", "true");
    media.innerHTML = "";
    media.appendChild(iframe);
  });

  return row;
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("games");
  if (!Array.isArray(GAMES) || GAMES.length === 0) {
    list.innerHTML = `<p style="color: var(--text-dim); text-align: center;">
      No games added yet — edit js/games-data.js to add your first one.
    </p>`;
    return;
  }
  GAMES.forEach((game, i) => list.appendChild(renderGame(game, i)));
});
