let sortingPriceBtn = document.querySelector(".sorting-main__button--price");
let sortingPriceForm = document.querySelector(".sorting-main__price");
let sortingBrandBtn = document.querySelector(".sorting-main__button--brand");
let sortingBrandForm = document.querySelector(".sorting-main__brand");

sortingPriceBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    sortingPriceForm.classList.remove('display-none');
})
sortingBrandBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    sortingBrandForm.classList.remove('display-none');
})



//------------------------------------прерываю событие ------------------------------------------
//------------------------------------работает но в данном случае отоброжается ек так как нам надо-----------------------
//sortingPriceBtn.addEventListener(`click`, (e) => {
//    event.stopPropagation()
//})
//document.addEventListener(`click`, (e) => {
//   sortingPriceForm.classList.add("display-none");
//})
