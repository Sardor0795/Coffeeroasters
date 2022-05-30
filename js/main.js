const elDrinkTitle = document.querySelector(".drink-title");
const elDrinkChoose = document.querySelector(".drink-choose-blocks");

elDrinkTitle.addEventListener("click", function () {
  elDrinkChoose.classList.toggle("drink-choose-blocks-open");
});
