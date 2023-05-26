const sectionBtn1 = document.getElementById("section-btn-1");
const sectionBtn2 = document.getElementById("section-btn-2");
const sectionBtn3 = document.getElementById("section-btn-3");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

sectionBtn1.addEventListener("click", () => {
  window.scrollBy({
    top: section1.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

sectionBtn2.addEventListener("click", () => {
  window.scrollBy({
    top: section2.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

sectionBtn3.addEventListener("click", () => {
  window.scrollBy({
    top: section3.getBoundingClientRect().top,
    behavior: "smooth",
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



