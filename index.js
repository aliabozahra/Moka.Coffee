document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
        loop: true, // Infinite loop

        autoplay: {
            delay: 2000, // Auto-slide every 2.5 seconds (2500ms)
            disableOnInteraction: false, // Keep autoplay after user interaction
        },
        speed: 800,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
