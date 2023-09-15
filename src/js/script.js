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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__contents').eq(i).toggleClass('catalog-item__contents_active');
                $('.catalog-item__lists').eq(i).toggleClass('catalog-item__lists_active');
            })
        });
    };

    toggleSlide('.catalog-item__contents__link');
    toggleSlide('.catalog-item__lists__link');

    // Modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
    })

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #buy').fadeOut();
    })

    $('.button_catalog').each(function(i){
        $(this).on('click', function() {
            $('#buy .modal__descrp').text($('.catalog-item__contents__subtitle').eq(i).text());
            $('.overlay, #buy').fadeIn();
        })
    })

    // validation form
    function validateForms(form){
        $(form).validate({
            rules:{
                name:"required",
                phone:"required",
                email:{
                    required: true,
                    email: true,
                    customEmailValidation: true
                },
            },
            messages: {
                name: "Введите свое имя",
                phone: "Введите номер телефона",
                email: {
                  required: "Введите свою почту",
                  email: "Неправильный адрес почты",
                  customEmailValidation: "Неправильный адрес почты"
                }
              }
        });
        jQuery.validator.addMethod("customEmailValidation", function(value, element) {
            return this.optional(element) || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value);
          }, "Неправильный адрес почты");
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#buy form')

  });
