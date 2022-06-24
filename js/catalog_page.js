let sortingPriceBtn = document.querySelector(".sorting-main__button--price");
let sortingPriceForm = document.querySelector(".sorting-main__price");


sortingPriceBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    sortingPriceForm.classList.remove('display-none');
})
//------------------------------------прерываю событие ------------------------------------------
//------------------------------------работает но в данном случае отоброжается ек так как нам надо-----------------------
//sortingPriceBtn.addEventListener(`click`, (e) => {
//    event.stopPropagation()
//})
//document.addEventListener(`click`, (e) => {
//   sortingPriceForm.classList.add("display-none");
//})
