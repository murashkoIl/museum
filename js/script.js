$(document).ready(function(){
    $('.videos-slider-flex').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        draggable: true,
        responsive: [
            {
                /* До какого разрешения  будут отображаться данные свойства*/
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.welcome-slider').slick({
        arrows: true,
        dots: true,
        draggable: true,
        appendArrows: $('.slider-panel-item-arrows'),
        appendDots: $('.slider-panel-item-dots')
        
    });
});

