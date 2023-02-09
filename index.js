const els = document.body.querySelectorAll(".photo-grid__item");
const firstPage = document.querySelector(".first-page");
const buyPage = document.querySelector(".buy-page");
let elses = 0;

function handleClick(event) {
  elses += 1;
  event.target.classList.toggle("photo-grid__item1");
  if (elses === 3) {
    firstPage.classList.add("first-page_hide");
    buyPage.classList.add("buy-page_show");
  }
}
Array.from(els).forEach((el) => {
  el.addEventListener("click", handleClick);
});
