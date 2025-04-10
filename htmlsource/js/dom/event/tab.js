// tab-content 보여주기 : show 클래스명
// 메누 선택 : orange 클래스명 이용

// Products 클릭 + 첫번째 tab-content
// -Information, Shipping : orange 제거, show 제거
// Information 클릭 + 두번째 tab-content
// - Products, Shipping : orange 제거, show 제거
// Shipping 클릭 + 세번째 tab-content
// - Products, Information : orange 제거, show 제거

// 클릭 요소
const tabs = document.querySelectorAll(".tab-button");
// 변화가 일어나야 하는 요소
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    // 모든 li의 orange 제거
    tabs.forEach((item) => item.classList.remove("orange"));
    // 현재 눌러진 li에는 orange 추가
    e.target.classList.add("orange");
    // 모든 div의 show 제거
    contents.forEach((item) => item.classList.remove("show"));
    // 현재 눌러진 li와 같은 순서인 div에 show 추가
    contents[idx].classList.add("show");
  });
});
