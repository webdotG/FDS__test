const textSpans = document.querySelectorAll('.catalog-page__table-description');

if (textSpans.length) {
    window.addEventListener('resize', (e) => {
        console.log('window size ', window.outerWidth);
        for (const span of textSpans) {
            if (window.outerWidth <= 680) {
                //span.append('<p>safs</p>')-------------------на случай  если нужно вставить что-то сложнее чем просто текст в спан
                span.textContent = "...";
            } else {
                span.textContent = "мм";
            }
        }
    });
}

