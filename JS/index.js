const changeText = document.getElementById("change-text");
const texts = ["소통", "정보 전달", "디자인"];
let index = 0;

function animateText() {
  changeText.style.opacity = 0;

  setTimeout(() => {
    changeText.textContent = texts[index];
    changeText.style.opacity = 1;
    index = (index + 1) % texts.length;
  }, 500);

  setTimeout(animateText, 3000);
}
animateText();


