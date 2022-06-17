let formOpen = document.querySelector(".cart-all-in-all__order-btn");
let formClose = document.querySelector(".feedback-form__btn-close");
let feedbackForm = document.querySelector('.feedback-form__wrapper');

formOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    feedbackForm.classList.remove('visual-hidden');
})

formClose.addEventListener('click', function (evt){
    evt.preventDefault();
    feedbackForm.classList.add('visual-hidden');
})