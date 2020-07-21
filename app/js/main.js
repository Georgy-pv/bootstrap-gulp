$('document').ready(function(){

    $('.our-team__slider-wrap').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    centerMode: true,
                    variableWidth: true
                }
            }
        ]
    });


});