// ハンバーガーメニュー
const target = document.getElementById("hamburger-menu");

target.addEventListener('click', () => {
  target.classList.toggle('active');
});

const target2 = document.getElementById("hamburger-menu2");
const barToggle = document.getElementById("hamburger-menu2--bar");
const barMdlToggle = document.getElementById(".hamburger-menu2--bar--middle");

target2.addEventListener('click', () => {
  barToggle.classList.toggle('active');
  barMdlToggle.classList.toggle('active');
});

// ドロワーメニュー
