const sectionBtn1 = document.getElementById("section-btn-1");
const sectionBtn2 = document.getElementById("section-btn-2");
const sectionBtn3 = document.getElementById("section-btn-3");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const sections = [section1, section2, section3];
const buttons = [sectionBtn1, sectionBtn2, sectionBtn3];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    window.scrollBy({
      top: sections[index].getBoundingClientRect().top,
      behavior: "smooth",
    });
    buttons.forEach((btn, btnIndex) => {
      btn.style.backgroundColor = btnIndex === index ? "#666666" : "#c0c0c0";
    });
  });
});

function showButtons() {
  const loader = document.querySelector(".loader");
  const sectionBtnBox = document.querySelector(".section-btn-box");

  loader.style.display = "none";

  sectionBtnBox.style.display = "block";
}

// 페이지 로드 완료 시 3초 후에 showButtons 함수를 호출
window.addEventListener("load", function () {
  setTimeout(showButtons, 3000);
});
