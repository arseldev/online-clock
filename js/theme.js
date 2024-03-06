const container = document.querySelector(".container");
const theme = document.querySelector(".select-theme");

theme.addEventListener("change", (e) => {
  container.className = `container ${e.target.value}`;
});
