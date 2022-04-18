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




// let weDoSlideLeft = document.querySelector(".icon__left");

// let weDoSlideRight = document.querySelector(".icon__right");
// console.log(weDoSlideLeft, weDoSlideRight);
// let weDocount = 1;
// showSlides(weDocount);

// function nextSlider() {
//     showSlides(weDocount +=1 );
// }

// function previousSlider() {
//     showSlides(weDocount -= 1);
// }

// function currentSlide(n) {
//     showSlides(weDocount = n)
// }

// function showSlides(n){
//     let slides =document.getElementsByClassName("quote__info__wrapper");

//     if(n > slides.length) {
//         weDocount = 1;
//     }
    
//     if(n < 1) {
//         weDocount = slides.length;
//     }
//     for (let slide of slides) {
//         slide.style.transform = "translateX(10px)";
//     }

//     sleep(200);
//     for (let slide of slides) {
//         slide.style.display="none";
//         sleep(200);
//     }
//     slides[weDocount - 1].style.display = "flex";

//     function sleep(millis) {
//         let t = (new Date()).getTime();
//         let i = 0;
//         while (((new Date()).getTime() - t) < millis) {
//             i++;
//         }
//     }
// }





let offset = 0;
const sliderLine = document.querySelector('.info__wrapper');
// document.querySelector('.icon__right').addEventListener('click', function(){
//     offset += 900;
//     if (offset > 900){
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });



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

