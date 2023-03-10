// carusel
const scroller = document.querySelector('.popular__scroller');
const carusel = scroller.querySelector('.popular__carusel');
const arrowLeft = document.querySelector('.popular__arrow-left');
const arrowRight = document.querySelector('.popular__arrow-right');
const bouquetWidth = document.querySelector('.popular__bouquet').clientWidth;


arrowLeft.addEventListener('click', scrollToRightBouquet);
arrowRight.addEventListener('click', scrollToLeftBouquet);

function scrollToLeftBouquet() {
    if(carusel.scrollLeft < (carusel.scrollWidth - bouquetWidth))
        carusel.scrollBy({left: bouquetWidth, top: 0, behavior: 'smooth'});
    else
        carusel.scrollTo({left: 0, top: 0, behavior: 'smooth'});
}
function scrollToRightBouquet() {
    if(carusel.scrollLeft != 0)
        carusel.scrollBy({left: -bouquetWidth, top: 0, behavior: 'smooth'});
    else
        carusel.scrollTo({left: carusel.scrollWidth, top: 0, behavior: 'smooth'});

}

// choice card title
const choiceCards = document.querySelectorAll('.choice__card');
const choiceTitle = document.querySelectorAll('.choice__hover');
let i = 0;

while(i < choiceCards.length) {
    choiceCards[i].addEventListener ('mouseover', choiceTitle[i].classList.add('choice-title-hover'));

    // function showArrow(i) {
    //     console.log(choiceTitle[i]);
    //     );
    // }
    i++;
}