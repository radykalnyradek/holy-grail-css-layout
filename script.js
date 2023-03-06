const navIcon = document.querySelector(".fa-solid");
navIcon.addEventListener("click", (toggleNav) => {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");
  const nav = document.querySelector("#jsnav");
  nav.classList.toggle("hide-nav");
});
