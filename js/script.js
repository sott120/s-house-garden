// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        // type: 'fraction',
        type: 'custom', //커스텀으로 추가하는법
        clickable: true,
        renderCustom: function custom(swiper, current, total) {
            return `${current} · ${total}`;
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// document.getElementsByClassName('swiper-pagination')[0].innerHTML = `
//     <span class="swiper-pagination-current">1</span>
//     ·
//     <span class="swiper-pagination-total">3</span>
//   `;
