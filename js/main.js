(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

const items = document.querySelectorAll('.item__accordion');
const mobileBtn = document.querySelector('.mob__nav-btn');
const mobNav = document.querySelector('.mobile__nav');


mobileBtn.addEventListener('click', function () {
    mobNav.classList.toggle('mobile__nav-active');
    mobileBtn.classList.toggle('mob__nav-btn-close');
})
Object.values(items).map(item => {
    item.onclick = function (event) {
        console.log(event.currentTarget);

        const textWrapper = event.currentTarget.querySelector('.accordion__text-wraper');

        textWrapper.classList.toggle('opened');
        const arrowUp = event.currentTarget.querySelector('.arrow__down');
        arrowUp.classList.toggle('arrow__down-active');
    };
});

let offset = 0;
const sliderLine = document.querySelector('.info__wrapper');
let clickNext = () => {
    offset += 100;
    if (offset > 200){
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';
}

let clickPrev = () => {
    offset -= 100;
    if (offset < 0){
        offset = 0;
    }
    sliderLine.style.left = -offset + '%';
}

