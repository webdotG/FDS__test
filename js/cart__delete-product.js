let productDel = document.querySelectorAll('.product-remove__btn');

for (let i = 0; i < productDel.length; i++ ){
    productDel[i].addEventListener('click', function (){
    productDel[i].parentElement.parentElement.classList.add('display-none');
})
}