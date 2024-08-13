let currentIndex = 0;

function showItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    const inner = document.querySelector('.carousel-inner');
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    inner.style.transform = `translateX(${offset}%)`;
}

function moveNext() {
    showItem(currentIndex + 1);
}

function movePrev() {
    showItem(currentIndex - 1);
}
