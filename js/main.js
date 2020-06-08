$(function(){

        $('.service__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            fade: true,
            cssEase: 'linear'
          });

          $('.works__slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.works__slider-nav'
          });
          $('.works__slider-nav').slick({
            slidesToShow: 7,
            slidesToScroll: 7,
            asNavFor: '.works__slider-main',
            // centerMode: true,
            focusOnSelect: true,
            arrows: false,
          });

          $('.case__wrapper-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            fade: true,
            cssEase: 'linear',
            dotsClass: 'case__dots',
          });

          $(".team__img-1, .team__img-2, .team__img-3, .team__img-4, .team__img-5").click(function(e) {
            e.preventDefault();
            $(".team__img-1, .team__img-2, .team__img-3, .team__img-4, .team__img-5").removeClass('active');
            $(this).addClass('active');
          });

          $(".header__nav-gamburger").click(function(e) {
            e.preventDefault();
            $(".header__nav-gamburger, nav").toggleClass('active__btn');
            $("nav").toggleClass('active__menu');
          });
          

          $(".header__nav-items").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
  
});

new WOW().init();
