// Renders each game in GAMES (from games-data.js) as a simple card:
// thumbnail + title. Clicking the card opens playUrl in a new tab if set,
// otherwise plays an inline video if set, otherwise does nothing.
function renderGameCard(game) {
  const isLink = !game.video && game.playUrl;
  const el = document.createElement(isLink ? "a" : "div");
  el.className = "game-card";
  if (isLink) {
    el.href = game.playUrl;
    el.target = "_blank";
    el.rel = "noopener";
  }

  el.innerHTML = `
    <div class="thumb-wrap">
      <img src="${game.thumb}" alt="Screenshot of ${game.title}" loading="lazy" />
    </div>
    <p class="game-card-title">${game.title}</p>
  `;

  if (game.video) {
    el.addEventListener("click", () => {
      const wrap = el.querySelector(".thumb-wrap");
      wrap.innerHTML = `<video src="${game.video}" controls autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
    });
  }

  return el;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("games-grid");
  if (!Array.isArray(GAMES) || GAMES.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; color: var(--text-dark-dim);">
      No games added yet — edit js/games-data.js to add your first one.
    </p>`;
    return;
  }
  GAMES.forEach((game) => grid.appendChild(renderGameCard(game)));
});