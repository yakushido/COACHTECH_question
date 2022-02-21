const target = document.getElementById("hamburger-menu");

target.addEventListener('click', () => {
  target.classList.toggle('active');
});

const target2 = document.getElementById("hamburger-menu2--bar");

target2.addEventListener('click', () => {
  target2.classList.toggle('active');
});