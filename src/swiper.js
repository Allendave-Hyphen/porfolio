const { default: Swiper } = require("swiper");

const swiper = new Swiper('.swiper', {
    //optional parameter
    direction: 'vertical',
    loop: true,
    // if we need the navigation 
    pagination: {
        ed: '.swiper-pagination',
    },
    //navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //amd we need a scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }
});