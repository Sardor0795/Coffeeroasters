const elDrinkSection = document.querySelector(".drink-section");

elDrinkSection.addEventListener("click", function (evt) {
  if (evt.target.matches(".drink-title")) {
    evt.target.nextElementSibling.classList.toggle("drink-choose-blocks-open");
  }
});
