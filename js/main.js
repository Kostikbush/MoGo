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
// let btn = document.querySelector('.accordion__btn');
// let text = document.querySelector('.accordion__text-wraper');
// let arrow = document.querySelector('.arrow__down');

// btn.onclick = function () {
//     console.log('Кнопка нажата!');
//     text.classList.toggle('opened');
//     arrow.classList.toggle('arrow__down-active');
// };


// const texts = document.querySelectorAll('.accordion__text-wraper');
// const arrows = document.querySelectorAll('.arrow__down');
Object.values(items).map(item => {
    item.onclick = function (event) {
        console.log(event.currentTarget);

        const textWrapper = event.currentTarget.querySelector('.accordion__text-wraper');

        textWrapper.classList.toggle('opened');
        
        const arrowUp = event.currentTarget.querySelector('.arrow__down');
        arrowUp.classList.toggle('arrow__down-active');

        // texts.classList.toggle('opened');
        // arrows.classList.toggle('arrow__down-active');
    };
});


