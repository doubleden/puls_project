$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive:[
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    appendDots: $(".slider-dots"),

                    arrows: false,
                }
            }
        ]
    });
  });
