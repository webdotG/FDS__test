let sortingPriceBtn = document.querySelector(".sorting-main__button--price");
let sortingPriceForm = document.querySelector(".sorting-main__price");
let sortingBrandBtn = document.querySelector(".sorting-main__button--brand");
let sortingBrandForm = document.querySelector(".sorting-main__brand");
let sortingInOrderBtn = document.querySelector(".sorting-main__button--expensive");
let sortingInOrderForm = document.querySelector('.catalog-page__sorting-sub-menu-list')


sortingPriceBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    sortingPriceForm.classList.toggle('display-none');
})
sortingBrandBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    sortingBrandForm.classList.toggle('display-none');
})

sortingInOrderBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    sortingInOrderForm.classList.toggle('display-none');
})



//------------------------------------прерываю событие ------------------------------------------
//------------------------------------работает но в данном случае отоброжается ек так как нам надо-----------------------
//sortingPriceBtn.addEventListener(`click`, (e) => {
//    event.stopPropagation()
//})
//document.addEventListener(`click`, (e) => {
//   sortingPriceForm.classList.add("display-none");
//})
