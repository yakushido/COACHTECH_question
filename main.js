const target = document.getElementsByClassName("hamburger-menu");
const bar = document.getElementsByClassName("hamburger-menu--bar");

target.addEventListener('click', () => {
  bar.classList.toggle('active');
});