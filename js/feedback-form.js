let formOpen = document.querySelector(".cart-all-in-all__order-btn");
let formClose = document.querySelector(".feedback-form__btn-close");
let feedbackForm = document.querySelector('.feedback-form__wrapper');

console.log(formOpen);
formOpen.addEventListener('click', function (evt) {
    console.log('TEST');
    feedbackForm.classList.remove('display-none');
    evt.preventDefault()
})

formClose.addEventListener('click', function (evt){
    console.log('TEST');
    feedbackForm.classList.add('display-none');
    evt.preventDefault()
})


