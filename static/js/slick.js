$(document).ready(function() {
    console.log('document loaded.');

    $('.hero_slider').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});