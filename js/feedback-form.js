let formOpen = document.querySelector(".cart-all-in-all__order-btn");
let formClose = document.querySelector(".feedback-form__btn-close");
let feedbackForm = document.querySelector('.feedback-form__wrapper');
let productHint = document.querySelector('.product-remove__hint');


formOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    feedbackForm.classList.remove('display-none');
})

formClose.addEventListener('click', function (evt){
    evt.preventDefault();
    feedbackForm.classList.add('display-none');
})

//productHint.addEventListener('click',( evt) {
  //  evt.preventDefault()
//} )


