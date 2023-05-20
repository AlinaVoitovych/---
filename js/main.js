
$('.articles').slick({
    infinite: true,
    slidesToShow: 3,
    slidesPerRow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,

    customPaging: function (slider, i) {
        return '<div class="dot"></div>';
    },
    centerPadding: 0,
    prevArrow: $('.arrowLeft'),
    nextArrow: $('.arrowRight'),
});



$('.header-slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: true,
    customPaging: function (slider, i) {
        return '<div class="dot"></div>';
    }

});


const arrow = document.querySelector('.arrow')
arrow.addEventListener('click', (e) => {
    window.scrollTo({ top: 800, behavior: "smooth" })
})

// const menu = document.querySelector('.social')
// addEventListener('click', function() {
//     document.querySelector('.projects')
//     window.scrollTo(".projects")
// })
// document.getElementsByClassName("nav-link")
// addEventListener("click", function(){
//     document.querySelector("projects").
//     style.getElementsByClassName("projects")
// })