const prev = document.querySelector('.compare-gallery__control-btn--prev');
const next = document.querySelector('.compare-gallery__control-btn--next');
const galleryItems = document.querySelectorAll('.compare-gallery__item');

let arr = [0]; //начало отсчет массива
let index = 0; //индекс элем массива

if (galleryItems.length) {
    for (const item of galleryItems) { //исли  масс не пуст
        arr = [
            ...arr,  // добавь в массив новое значение
            arr[index] + item.clientWidth //нач переберать 0+ i
        ];
        index += 1;
    }
}


let current = 0; //

next.addEventListener('click', function (){
    if (current < arr.length - 1) current += 1;
    else current = 0;

    console.log(current, arr[current]);

    document.querySelector('.compare-gallery__wrapper').scroll({ left: arr[current], top: 0, behavior:'smooth' });
})

prev.addEventListener('click', function (){
    if (current > 0) current -= 1;
    else current = arr.length - 1;

    console.log(current, arr[current]);

    document.querySelector('.compare-gallery__wrapper').scroll({ left: arr[current], top: 0, behavior:'smooth' });
})


//массив из всех элем блока
//потом посмотреть сколько из них в видимости
//раздать классы в поле видимости как?
// scroll too
//290 посчитать массив из всех создать массив
//1-0 2-290 3-w