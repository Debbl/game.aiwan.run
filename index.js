const md = window.markdownit();
fetch(
  "https://raw.githubusercontent.com/Debbl/react-minesweeper/main/README.md"
)
  .then((response) => response.text())
  .then((data) => {
    const result = md.render(data);
    const el = document.querySelector(".minesweeper-md");
    el.innerHTML = result;
  });

fetch(
  "https://raw.githubusercontent.com/Debbl/solidjs-tic-tac-toe/main/README.md"
)
  .then((response) => response.text())
  .then((data) => {
    const result = md.render(data);
    const el = document.querySelector(".tictactoe-md");
    el.innerHTML = result;
  });
