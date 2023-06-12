const md = window.markdownit({
  html: true,
});

const pages = ["react-minesweeper", "solidjs-tic-tac-toe", "game-of-life", "bubble-wrap"];

pages.forEach((p) => {
  fetch(`https://raw.githubusercontent.com/Debbl/${p}/main/README.md` )
    .then((response) => response.text())
    .then((data) => {
      const result = md.render(data);
      const el = document.querySelector(`.${p}-md`);
      el.innerHTML = result;
    });
});
